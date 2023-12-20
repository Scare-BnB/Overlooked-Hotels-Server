const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

async function comparePassword(plaintextPassword, hashedPassword){
    let doesPasswordMatch = false;

    doesPasswordMatch = await bcrypt.compare(plaintextPassword, hashedPassword);

    return doesPasswordMatch;
}

function generateJwt(userId){

    let newJwt = jwt.sign(
        {userId}, 
        process.env.JWT_KEY, 
        {expiresIn: "2d"}
    );

    return newJwt;
}

module.exports = {
    comparePassword, generateJwt
}