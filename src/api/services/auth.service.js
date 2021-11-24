const jwt = require('jsonwebtoken');
const User = require('../models/user.model');

const authenticate = async (query) => {
    try {
        if (query.email === '' || query.password === '') {
            throw new Error('All fields must be filled');
        }
        const auth = await User.findOne(query).then((user) => {
            const token = jwt.sign({ id: user.id, email: user.email, role: user.role }, 
                'ae3ilm!2585', 
                { expiresIn: '2h' });
            return { token };
        }).catch((err) => {
            throw new Error('Incorrect username or password', { cause: err });
        });
        return auth.token;
    } catch (err) {
        throw Error(err.message);
    }
};

module.exports = { authenticate };