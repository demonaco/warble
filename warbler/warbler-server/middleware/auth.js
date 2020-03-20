require("dotenv").load();
const jwt = requre("jsonwebtoken");


exports.loginRequired = function(req, res, next) {
    try {
        const token = req.headers.authorization.split(" ")[1]; // bearer "Token"  
        jwt.verify(token, process.env.SECRET_KEY, function (err, decoded){
            if (decoded) {
                return next();
            } else {
                return next({
                    status: 401,
                    message: "Please log in first"
                });
            }
        });
    } catch (error) {
        return next({
            status: 401, 
            message: "Please log in first"
        });
    }
    
}; 

exports.ensureCorrectUser = function(req, res, next) {
    
}