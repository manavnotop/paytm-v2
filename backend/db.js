const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://manavnotop:<password>@cluster0.bu6qrds.mongodb.net/");

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

const User = mongoose.model("User", userSchema);

module.exports = {
    User,
};