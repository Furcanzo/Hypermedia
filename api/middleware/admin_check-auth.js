const jwt = require('jsonwebtoken');

module.exports = (req, res, next) =>{
    try {
        const token = req.headers.authorization.split(" ")[1];
         const decoded = jwt.verify(token, process.env.JWT_KEY);
        if (decoded.admin){
            req.userData = decoded;
            next();
        }else {
            const error = new Error('Authentication failed');
            error.status = 401;
            return next(error);
        }
    }catch (e) {
        const error = new Error('Authentication failed');
        error.status = 401;
        return next(error);
    }
};