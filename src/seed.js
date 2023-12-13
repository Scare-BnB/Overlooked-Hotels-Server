require('dotenv').config();

const mongoose = require('mongoose');
const { connectToDatabase } = require('./database');
const { Accommodation } = require('./models/AccommodationModel');
const { User } = require('./models/UserModel');

connectToDatabase().then(async () => {

    console.log("Creating seed data");

    let newUser = new User(
        {
            firstName: "Jack",
            lastName: "Torrance",
            email: "jack.t@email.com",
            password: "123456",
            admin: true
        }
    )
    let newAccommodation = new Accommodation(
        {
        name: "The Grand Lodge",
        costPerNight: 120
    });

    await newUser.save().then(() => {
        console.log(`${newUser.firstName} is in the database.`);
    })

    await newAccommodation.save().then(() => {
        console.log(`${newAccommodation.name} is in the database.`);
    })

})