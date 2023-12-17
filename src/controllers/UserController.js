const { User } = require('../models/UserModel');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');

// Create a NEW Account
router.post("/", async (request, response) => {
    
    let newUser = await User.create(request.body).catch(error => {return error});

    response.json(newUser);
})

router.post("/login", async (request, resopnse) => {
    let targetUser = await User.findOne({username: request.body.email}).catch(error => {return error});
    let isPasswordCorrect = comparePassword(request.body.password, targetUser.password);
})

router.get("/verify", async (request, response) => {

})

router.get("/regenerate", async (request, response) => {

})

// Get All Users
router.get("/", async (request, response) => {
    
    let users = await User.find({});
    
    response.json(users);
})

// Login to an Account
router.get("/:id", async (request, response) => {

})

// Edit information on an Account
router.patch("/", async (request, response) => {

})

// Delete Account
router.delete("/", async (request, response) => {
    
})

module.exports = router;