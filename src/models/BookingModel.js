const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    location: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Accommodation',
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    startDate: {
        type: Date,
        required: true
    },
    endDate: {
        type: Date,
        required: true
    },
    cost: {
        type: Number,
        required: true,
        default: 0
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    Booking
}