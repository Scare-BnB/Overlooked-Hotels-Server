require('dotenv').config();

const mongoose = require('mongoose');
const { connectToDatabase } = require('./database');
const { Accommodation } = require('./models/AccommodationModel');
const { User } = require('./models/UserModel');

connectToDatabase().then(async () => {

    console.log("Creating seed data");

    let newAdminUser = new User(
        {
                firstName: "Jack",
                lastName: "Torrance",
                email: "jack.t@email.com",
                password: "123456",
                admin: true
        }
    )
    
    let newUser = new User(
        {
                firstName: "Annie",
                lastName: "Wilkes",
                email: "a.wilkes@email.com",
                password: "password1",
                admin: false
        }
    )

    await newAdminUser.save().then(() => {
        console.log(`${newAdminUser.firstName} is in the database.`);
    })

    await newUser.save().then(() => {
        console.log(`${newUser.firstName} is in the database.`);
    })
        
    const locations = [
        {
            name: "The Grand Lodge",
            costPerNight: 120
        },
        {
            name: "The Wilkes Cabin",
            costPerNight: 80
        },
        {
            name: "The Fairvale Motel",
            costPerNight: 100
        }
    ];

    async function storeLocations(){
        const locationList = await Accommodation.insertMany(locations);
        console.log("Accommodations are in the database.");
        return locationList;
    }
    storeLocations();
})