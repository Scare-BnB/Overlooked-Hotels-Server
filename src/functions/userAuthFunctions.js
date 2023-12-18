const bcrypt = require('bcryptjs');

async function comparePassword(plaintextPassword, hashedPassword){
    let doesPasswordMatch = false;

    doesPasswordMatch = await bcrypt.compare(plaintextPassword, hashedPassword);

    return doesPasswordMatch;
}

module.exports = {
    comparePassword
}