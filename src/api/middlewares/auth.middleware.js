const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
    const authToken = req.headers.authorization;
    if (authToken !== undefined) {
        const token = authToken.split(' ')[1];
        jwt.verify(token, 'ae3ilm!2585', (err, data) => {
            if (err) {
                res.status(401).json({ message: 'missing auth token' });
            } else {
                req.token = token;
                req.loggedUserId = data.id;
                req.loggedUserEmail = data.email;
                req.loggedUserRole = data.role;
                next();
            }
        });
    } else {
        res.status(401).json({ message: 'jwt malformed' });
    }
};

module.exports = auth;