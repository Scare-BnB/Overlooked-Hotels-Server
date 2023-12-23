// import review model
const { Review } = require('../models/ReviewModel');
// import express library
const express = require('express');
// make instance of router
const router = express.Router();

// Get ALL Reviews
router.get("/all", async (request, response) => {
    // fetch all reviews in db
    let reviews = await Review.find({})
    .catch(error => {return error});
    
    response.json(reviews);
})

// GET ALL Reviews by Location
router.get("/:id/all", async (request, response) => {
    // fetch review by review._id
    let reviews = await Review.findById()
    .catch(error => {return error});
    
    response.json(reviews);
})

// Create Review By User
router.post("/", async (request, response) => {
    // create a new review with body data
    let review = await Review.create(request.body)
    .catch(error => {return error});

    response.json(review);
})

// Update Review By User
router.patch("/:id", async (request, response) => {
    try {
        // fetch and update partial review data
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
        // fetch review by id and remove from db
        await Review.findByIdAndDelete(request.params.id);
        return response.status(200).send("Review Deleted!");
    } catch (error) {
        return response.status(500).send(error);
    }
})

module.exports = router;