const { User } = require('../models/UserModel');

const requestLogin = (request, response, next) => {
    const isUser = request.User;
    if (isUser){
        next();
    } else {
        response.status(401).send("Not an authorized user.")
    }
};

const adminUser = (request, response, next) => {
    const isAdmin = request.User;
    if (isAdmin && User.admin==true){
        next();
    } else {
        response.statusCode(403).send("Admin access only.")
    }
};

module.exports = {
    requestLogin, adminUser
}