const { User } = require('../models/UserModel');
const jwt = require('jsonwebtoken');

const requestLogin = (request, response, next) => {
    const isUser = request.User;
    if (isUser){
        const token = request.header
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