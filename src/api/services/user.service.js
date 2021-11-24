const User = require('../models/user.model');

const getUsers = async (query) => {
    try {
        const users = await User.find(query);
        return users;
    } catch (err) {
        throw Error('Error while getting Users');
    }
};

const createUser = async (query) => {
    try {
        const user = await User.create(query);
        return user;
    } catch (err) {
        let msg = 'Invalid entries. Try again.';
        if (err.name === 'MongoServerError') {
            msg = 'Email already registered';
        } 
        throw new Error(msg, { cause: err });
    }
};

module.exports = { getUsers, createUser };