const validator = require('validator');
const db = require('../database/db');

const authSchema = db.Schema({
    email: {
        type: String,
        required: [true, 'All fields must be filled'],
        validate: [validator.isEmail, 'Incorrect username or password'],
    },
    password: {
        type: String,
        required: [true, 'All fields must be filled'],
    },
});

const Auth = db.model('Auth', authSchema);

module.exports = Auth;