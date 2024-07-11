const express = require('express');
const zod = require('zod');
const { User } = require('../db'); 
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');

const router = express.Router();

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()
})

router.post('/signup', async function(req, res){
    const { success } = signupBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect input",
        })
    }

    const exsistingUser = await User.findOne({
        username: req.body.username,
    })

    if(exsistingUser){
        return res.status(411).json({
            message: "Email already taken"
        })
    }

    const user = await User.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })

    const userId = user._id;

    const token = jwt.sign({
        userId
    }, JWT_SECRET);
})

module.exports = router;