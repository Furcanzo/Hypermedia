const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
        req.userData = jwt.verify(token, process.env.JWT_KEY);
        next();
    }catch (e) {
        const error = new Error('Authentication failed');
        error.status = 401;
        return next(error);
    }
};