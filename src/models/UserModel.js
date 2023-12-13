const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        unique: false
    },
    phone: {
        type: Number,
        min: 10,
        max: 10
    },
    admin: {
        type: Boolean,
        default: false
    }
});

UserSchema.pre(
    'save',
    async function (next) {
        console.log("Saving User to the database.");
        next();
    }
)

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}