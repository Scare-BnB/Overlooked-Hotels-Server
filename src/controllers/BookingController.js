const { totalCost } = require('../functions/userBookingFunctions');
const { Booking } = require('../models/BookingModel');
const express = require('express');
const router = express.Router();

// Get ALL Bookings (admin only)
router.get("/all", async (request, response) => {
    let bookings = await Booking.find({})
    .catch(error => {return error});

    response.json(bookings);
})

// Get ALL Bookings By USER
router.get("/user/all", async (request, response) => {
    let bookings = await Booking.findById()
    .catch(error => {return error});

    response.json(bookings);
})

// Get ONE Booking By USER
router.get("/:id", async (request, response) => {
    let booking = await Booking.findOne({_id:request.params.id})
    .catch(error => {return error});

    response.json(booking);
})

// Create Booking
router.post("/", async (request, response) => {
    try {
        let booking = await Booking.create(request.body);
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