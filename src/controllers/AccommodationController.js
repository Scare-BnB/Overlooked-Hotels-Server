const { Accommodation } = require('../models/AccommodationModel');
const express = require('express');
const router = express.Router();

// List ALL Accommodations
router.get("/all", async (request, response) => {
    
    let result = await Accommodation.find({});
    
    response.json({
        locations: result
    });
})

// Find ONE Accommodation by NAME - work in progress
router.get("/:name", async (request, response) => {
    
    let result = null;
    
    response.json({
        location: result
    });
})

// Update Accommodation by NAME
router.patch("/:name", async (request, response) => {

    let result = null;

    response.json({
        location: result
    });
})

// Create Accommodation?
router.post("/", async (request, response) => {
    let result = await Accommodation.create(request.body).catch(error => {return error});

    response.json({
        location: result
    });
})

// Delete Accommodation by NAME
router.delete("/:name", async (request, response) => {
    
    let result = null;

    response.json({
        location: result
    });
})

module.exports = router;