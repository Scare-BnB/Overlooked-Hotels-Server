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

router.post("/login", async (request, resopnse) => {

})

router.get("/verify", async (request, response) => {

})

router.get("/regenerate", async (request, response) => {

})

// Get All Users
router.get("/",)

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