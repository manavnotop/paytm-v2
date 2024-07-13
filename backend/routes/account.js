const express = require('express');
const authMiddleware = require('./middleware');
const { User, Account } = require('../db');

const router = express.Router();

router.get('/balance', authMiddleware, async function(req, res){
    const account = await Account.findOne({
        userId: req.userId,
    })

    res.status(200).json({
        balance: account.balance,
    })
});

module.exports = router;