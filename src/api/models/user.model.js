const validator = require('validator');
const db = require('../database/db');

const userSchema = db.Schema({
    name: {
        type: String,
        required: [true, 'Invalid entries. Try again'],
    },
    email: {
        type: String,
        required: [true, 'Invalid entries. Try again'],
        unique: [true, 'Email already registered'],
        validate: [validator.isEmail, 'Invalid entries. Try again'],
    },
    password: {
        type: String,
        required: [true, 'Invalid entries. Try again'],
    },
    role: {
        type: String,
        default: 'user',
    },
});

const User = db.model('User', userSchema);

module.exports = User;