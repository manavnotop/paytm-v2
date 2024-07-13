const express = require("express");
const userRouter = require('./user');
const accoutRouter = require('./account');

const router = express.Router();

router.use("/user", userRouter);
router.use("/account", accoutRouter);

module.exports = router;