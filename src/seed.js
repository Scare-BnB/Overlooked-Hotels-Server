require('dotenv').config();

const mongoose = require('mongoose');
const { connectToDatabase } = require('./database');
const { Accommodation } = require('./models/AccommodationModel');

connectToDatabase().then(async () => {

    console.log("Creating seed data");

    let newAccommodation = new Accommodation(
        {
        name: "The Grand Lodge",
        costPerNight: 120

    });

    await newAccommodation.save().then(() => {
        console.log(`${newAccommodation.name} is in the database.`);
    })

})