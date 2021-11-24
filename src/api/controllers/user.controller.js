const UserService = require('../services/user.service');

const getUsers = async (req, res) => {
    try {
        const users = await UserService.getUsers({});
        return res.status(200).json({
            status: 200,
            data: users,
            message: 'Succesfully Users Retrieved',
        });
    } catch (err) {
        return res.status(400).json({ 
            status: 400, 
            message: err.message,
        });
    }
};

const createUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await UserService.createUser({ name, email, password });
        return res.status(201).json({ user });
    } catch (err) {
        const status = err.cause.name === 'MongoServerError' ? 409 : 400;
        return res.status(status).json({ message: err.message });
    }
};

const createAdminUser = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        if (req.loggedUserRole !== 'admin') {
            return res.status(403).json({ message: 'Only admins can register new admins' });
        }
        const user = await UserService.createUser({ name, email, password, role: 'admin' });
        return res.status(201).json({ user });
    } catch (err) {
        const status = err.cause.name === 'MongoServerError' ? 409 : 400;
        return res.status(status).json({ message: err.message });
    }
};

module.exports = { getUsers, createUser, createAdminUser };