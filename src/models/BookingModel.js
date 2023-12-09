const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const BookingSchema = new Schema({
    place: {
        type: String,
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
        required: true
    }
});

const Booking = mongoose.model('Booking', BookingSchema);

module.exports = {
    Booking
}