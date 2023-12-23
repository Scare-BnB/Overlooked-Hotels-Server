const { totalCost } = require('../functions/userBookingFunctions');
const { Booking } = require('../models/BookingModel');
const { User } = require('../models/UserModel');
const { Accommodation } = require('../models/AccommodationModel');
const express = require('express');
const router = express.Router();
const { checkLogin, checkAdmin } = require('../functions/authMiddleware');

// Get ALL Bookings (admin only)
router.get("/all", checkAdmin, async (request, response) => {
    try {
        const bookings = [];
        let bookingResponse = await Booking.find({}); // await Booking.find({ user: request.userId });

        for (let booking of bookingResponse) {
            const user = await User.findOne({ _id: booking.user });
            const location = await Accommodation.findOne({ _id: booking.location });

            const startDate = new Date(booking.startDate);
            const endDate = new Date(booking.endDate);
            const timeDifference = endDate.getTime() - startDate.getTime();
            const daysDifference = timeDifference / (1000 * 60 * 60 * 24);

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

// Create Booking
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