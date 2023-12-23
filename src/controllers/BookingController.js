// import booking model
const { Booking } = require('../models/BookingModel');
// import user model
const { User } = require('../models/UserModel');
// import accommodation model
const { Accommodation } = require('../models/AccommodationModel');
// import express library
const express = require('express');
// make instance of router
const router = express.Router();
// import admin and login verification functions
const { checkLogin, checkAdmin } = require('../functions/authMiddleware');

// Get ALL Bookings (admin only)
// route can be accessed once admin status is verified
router.get("/all", checkAdmin, async (request, response) => {
    try {
        // booking is an empty array
        const bookings = [];
        // fetch all bookings in the db
        let bookingResponse = await Booking.find({}); // await Booking.find({ user: request.userId });

        for (let booking of bookingResponse) {
            const user = await User.findOne({ _id: booking.user });
            const location = await Accommodation.findOne({ _id: booking.location });

            // establish start date
            const startDate = new Date(booking.startDate);
            //establish end date
            const endDate = new Date(booking.endDate);
            // calculate the difference in time between the two set dates
            const timeDifference = endDate.getTime() - startDate.getTime();
            // 1000 milliseconds x 60 seconds (to a minute) x 60 minutes (to an hour) x 24 hours (to a day)
            const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

            // simplifies the booking data to contain only main properties
            bookings.push({
                user: {
                    _id: user._id,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    email: user.email,
                },
                location: {
                    _id: location._id,
                    name: location.name,
                    costPerNight: location.costPerNight,
                },
                startDate: startDate,
                endDate: endDate,
                cost: daysDifference * location.costPerNight,
            });
        }
        
        return response.json(bookings);
    } catch (error) {
        console.log(error);
        return response.status(500).send(error);
    }
})

// Get ONE Booking By USER
router.get("/:id", async (request, response) => {
    let booking = await Booking.findOne({_id:request.params.id})
    .catch(error => {return error});

    response.json(booking);
})

// Create Booking after user has been verified
router.post("/", checkLogin, async (request, response) => {
    try {
        const { location, startDate, endDate } = request.body;

        let booking = await Booking.create({ user: request.userId, location, startDate, endDate });
        return response.json(booking);
    } catch (error) {
        return response.status(500).send(error);
    }
})

// Update Booking
router.patch("/:id", async (request, response) => {
    try {
        let updatedBooking = await Booking.findByIdAndUpdate(
            request.params.id, 
            request.body)
        response.json(updatedBooking);
    } catch (error) {
        return response.status(500).send(error);
    }
})

// Delete Booking
router.delete("/:id", async (request, response) => {
    try {
        await Booking.findByIdAndDelete(request.params.id);
        return response.status(200).send("Booking Deleted!");
    } catch (error) {
        return response.status(500).send(error);
    }   
})

module.exports = router;