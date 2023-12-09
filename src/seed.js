const mongoose = require('mongoose');
const { connectToDatabase } = require('./database');

connectToDatabase().then(async () => {

    console.log("Creating seed data");

    const Accommodation = mongoose.model('Accommodation', {
        name: String,
        costPerNight: Number
    });

    let TheGrandLodge = new Accommodation({
        name: "The Grand Lodge",
        costPerNight: 120
    });

    await TheGrandLodge.save().then(() => {
        console.log("The Grand Lodge is in the database.");
    })

})