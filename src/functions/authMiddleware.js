const { User } = require('../models/UserModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const decodeToken = (request) => {
    try {
        const token = request.header['Authorization'];

        if (!token) {
            return null;
        }

        const decoded = jwt.verify(token, process.env.JWT_KEY);

        return decoded.userId;
    } catch {
        return null;
    }
}

const checkLogin = (request, response, next) => {
    request.userId = decodeToken(request);

    if (request.userId === null) {
        return response.status(401).send("You are not logged in");
    }

    next();
};

const checkAdmin = async (request, response, next) => {
    request.userId = decodeToken(request);
    
    if (request.userId === null) {
        return response.status(401).send("You are not logged in");
    }

    const user = await User.findOne({ _id: request.userId });

    if (!user || user.admin === false) {
        return response.statusCode(403).send("Admin access only.");
    }

    next();
};

module.exports = {
    checkLogin, checkAdmin
}