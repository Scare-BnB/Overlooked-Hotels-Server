const { Accommodation } = require('../models/AccommodationModel');
const express = require('express');
const router = express.Router();

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
router.patch("/:id", async (request, response) => {
    try {
        let result = await Accommodation.findByIdAndUpdate(
            request.params.id, 
            request.body)
        response.json(result);
    } catch (error) {
        return response.status(500).send(error);
    }
})

// Create Accommodation (admin only)
router.post("/", async (request, response) => {
    let result = await Accommodation.create(request.body)
    .catch(error => {return error});

    response.json({
        location: result
    });
})

// Delete Accommodation by ID (admin only)
router.delete("/:id", async (request, response) => {
    try {
        await Accommodation.findByIdAndDelete(request.params.id);
        return response.status(200).send("Accommodation Deleted!");
    } catch (error) {
        return response.status(500).send(error);
    }
})

module.exports = router;