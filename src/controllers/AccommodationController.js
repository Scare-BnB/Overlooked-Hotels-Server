const { Accommodation } = require('../models/AccommodationModel');
const express = require('express');
const router = express.Router();
const { checkAdmin } = require('../functions/authMiddleware');

// List ALL Accommodations
router.get("/all", async (request, response) => {
    let locations = await Accommodation.find({})
    .catch(error => {return error});
    
    response.json(locations);
})

// Find ONE Accommodation by ID - work in progress
router.get("/:id", async (request, response) => {
    let location = await Accommodation.findById(request.params.id)
    .catch(error => {return error});
    
    response.json(location);
})

// Update Accommodation by ID (admin only)
router.patch("/:id", checkAdmin, async (request, response) => {
    try {
        let updatedLocation = await Accommodation.findByIdAndUpdate(
            request.params.id, 
            request.body)
        response.json(updatedLocation);
    } catch (error) {
        return response.status(500).send(error);
    }
})

// Create Accommodation (admin only)
router.post("/", checkAdmin, async (request, response) => {
    let newLocation = await Accommodation.create(request.body)
    .catch(error => {return error});

    response.json(newLocation);
})

// Delete Accommodation by ID (admin only)
router.delete("/:id", checkAdmin, async (request, response) => {
    try {
        await Accommodation.findByIdAndDelete(request.params.id);
        return response.status(200).send("Accommodation Deleted!");
    } catch (error) {
        return response.status(500).send(error);
    }
})

module.exports = router;