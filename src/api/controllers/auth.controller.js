const AuthService = require('../services/auth.service');

const authenticate = async (req, res) => {  
    const { email, password } = req.body;
    try {
        const auth = await AuthService.authenticate({ email, password });
        return res.status(200).json({ token: auth });
    } catch (err) {
        return res.status(401).json({ message: err.message });
    }
};

module.exports = { authenticate };