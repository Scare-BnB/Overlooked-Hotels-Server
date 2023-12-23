// import accommodation model
const { Accommodation } = require('../models/AccommodationModel');
// import express library
const express = require('express');
// make router instance
const router = express.Router();
// import function to check if user is admin
const { checkAdmin } = require('../functions/authMiddleware');

// List ALL Accommodations
router.get("/all", async (request, response) => {
    // fetch all locations stored in db
    let locations = await Accommodation.find({})
    .catch(error => {return error});
    
    response.json(locations);
})

// Find ONE Accommodation by ID - work in progress
router.get("/:id", async (request, response) => {
    // check from locationId in accommodation db
    let location = await Accommodation.findById(request.params.id)
    .catch(error => {return error});
    
    response.json(location);
})

// Update Accommodation by ID (admin only)
router.patch("/:id", checkAdmin, async (request, response) => {
    try {
        // update partial body information
        let updatedLocation = await Accommodation.findByIdAndUpdate(
            request.params.id, 
            request.body)
            // return location with updated body
        response.json(updatedLocation);
    } catch (error) {
        return response.status(500).send(error);
    }
})

// Create Accommodation (admin only)
router.post("/", checkAdmin, async (request, response) => {
    // create a new model using properties
    let newLocation = await Accommodation.create(request.body)
    .catch(error => {return error});

    response.json(newLocation);
})

// Delete Accommodation by ID (admin only)
router.delete("/:id", checkAdmin, async (request, response) => {
    try {
        // find locationId and remove from db
        await Accommodation.findByIdAndDelete(request.params.id);
        return response.status(200).send("Accommodation Deleted!");
    } catch (error) {
        return response.status(500).send(error);
    }
})

module.exports = router;