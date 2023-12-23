const { Review } = require('../models/ReviewModel');
const express = require('express');
const router = express.Router();

// Get ALL Reviews
router.get("/all", async (request, response) => {
    let reviews = await Review.find({})
    .catch(error => {return error});
    
    response.json(reviews);
})

// GET ALL Reviews by Location
router.get("/:id/all", async (request, response) => {
    let reviews = await Review.findById()
    .catch(error => {return error});
    
    response.json(reviews);
})

// Create Review By User
router.post("/", async (request, response) => {
    let review = await Review.create(request.body)
    .catch(error => {return error});

    response.json(review);
})

// Update Review By User
router.patch("/:id", async (request, response) => {
    try {
        let review = await Review.findByIdAndUpdate(
            request.params.id,
            request.body)
        response.json(review);
    } catch (error) {
        return response.status(500).send(error);
    }
})

// Delete Review By User
router.delete("/:id", async (request, response) => {
    try {
        await Review.findByIdAndDelete(request.params.id);
        return response.status(200).send("Review Deleted!");
    } catch (error) {
        return response.status(500).send(error);
    }
})

module.exports = router;