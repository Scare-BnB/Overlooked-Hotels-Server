const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AccommodationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    costPerNight: {
        type: Number,
        required: true
    }
});

const Accommodation = mongoose.model('Accommodation', AccommodationSchema);

module.exports = {
    Accommodation
}