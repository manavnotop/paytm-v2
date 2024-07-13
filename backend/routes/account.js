const express = require('express');
const authMiddleware = require('./middleware');
const { User, Account } = require('../db');
const mongoose = require('mongoose');

const router = express.Router();

router.get('/balance', authMiddleware, async function(req, res){
    const account = await Account.findOne({
        userId: req.userId,
    })

    res.status(200).json({
        balance: account.balance,
    })
});

router.post('/transfer', authMiddleware, async function(req, res){
    const session = await mongoose.startSession();

    session.startTransaction();
    const { to, amount } = req.body;

    const account = await User.findOne({ userId: req.userId }).session(session);

    if(!account || account.balance < amount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "insufficient balance",
        })
    }

    const toAccount = await User.findOne({ userId: to }).session(session);

    if(!toAccount){
        await session.abortTransaction();
        return res.status(400).json({
            message: "invalid account",
        })
    }

    await Account.updateOne({ userId: req.userId }, { $inc: { balance: -amount}}).session(session);
    await Account.updateOne({ userId: to }, { $inc: { balance: amount }}).session(session);

    await session.commitTransaction();
    res.status(200).json({
        message: "Transfer successfull",
    })
})

module.exports = router;