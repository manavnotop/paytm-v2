const mongoose = require('mongoose');
const { number } = require('zod');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URL);

const userSchema = mongoose.Schema({
    username:{
        required: true,
        type: String
    },
    password: {
        required: true,
        type: String
    },
    firstName: {
        required: true,
        type: String
    },
    lastName:{
        required: true,
        type: String
    },
});

const accoutSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    balance: {
        type: number,
        required: true
    }
})

const User = mongoose.model('User', userSchema);
const Account = mongoose.model('Account', accoutSchema);

module.exports = {
    User,
    Account
};