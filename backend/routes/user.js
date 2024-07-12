const express = require('express');
const zod = require('zod');
const { User } = require('../db'); 
const jwt = require('jsonwebtoken');
const { JWT_SECRET } = require('../config');
const authMiddleware = require('./middleware');

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

    res.json({
        message: "User created successfully",
        token: token
    })
})

const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
})

router.post('/signin', async function(req, res){
    const { success } = signinBody.safeParse(req.body);

    if(!success){
        return res.status(411).json({
            message: "Incorrect inputs"
        });
    }

    const user = await User.findOne({
        username: req.body.username,
        password: req.body.password
    })

    if(user){
        const token = jwt.sign({
            userId: user._id,
        }, JWT_SECRET);

        return res.status(200).json({
            token: token
        });
    }

    res.status(411).json({
        message: "Error while loggin in"
    })
})

const updateBody = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
})

router.put('/', authMiddleware, async function(req, res){
    const { success } = updateBody.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Error while update information",
        })
    }

    await User.updateOne({_id: req.userId}, req.body);

    res.status().json({
        message: "information updated successfully",
    })
})

router.get('/bulk', async function (req, res){
    const filter = req.query.filter || "";

    const users = await User.find({
        $or : [
            {
                firstName: {
                    $regex: filter
                }
            },
            {
                lastName: {
                    $regex: filter
                }
            }
        ]
    });

    res.status(200).json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports = router;