const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

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
        const user = this;
        if (!user.isModified('password')) return next();
        const hash = await bcrypt.hash(this.password, 10);
        this.password = hash;
        next();
    }
);

const User = mongoose.model('User', UserSchema);

module.exports = {
    User
}