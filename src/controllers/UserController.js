const { User } = require('../models/UserModel');
const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');

// Create a NEW Account
router.post("/", async (request, response) => {
    
    let newUser = await User.create(request.body).catch(error => {return error});

    response.json({
        user: newUser
    });
})

// Login to an Account
router.get("/", async (request, response) => {

})

// Edit information on an Account
router.patch("/", async (request, response) => {

})

// Delete Account
router.delete("/", async (request, response) => {
    
})