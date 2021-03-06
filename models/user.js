const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    name:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    admin:{
        type: Boolean,
        default: false,
        required: false,
    },
}, {timestamps: true});

const User = mongoose.model('User', UserSchema, 'users');

module.exports.User = User;