// import user model
const { User } = require("../models/UserModel");
// import express library
const express = require("express");
// make instance of router
const router = express.Router();
// import salt and hash methods
const bcrypt = require("bcryptjs");
// import function to generate token
const { generateJwt } = require("../functions/userAuthFunctions");

// Create a NEW Account
router.post("/register", async (request, response) => {
  // create a new user with body data, store in db
  let newUser = await User.create(request.body).catch((error) => {
    return error;
  });

  response.json(newUser);
});

router.post("/login", async (request, response) => {
  try {
    // fetch userId
    let targetUser = await User.findOne({
      email: request.body.email,
    });
    // check if user password matches the registered password to userId
    const isPasswordCorrect = await bcrypt.compare(request.body.password, targetUser.password);
    // if the user password is not the password registered return error
    if (!isPasswordCorrect) {
      return response
        .status(403)
        .json({ error: "You are not authorized to do this." });
    }
    // create token for userId
    let updatedJwt = generateJwt(targetUser._id);

    return response.json({
      jwt: updatedJwt,
      admin: targetUser.admin,
    });

  } catch (error) {
    return response.status(401).send("Invalid Email or Password.");
  }
});

// Get All Users
router.get("/", async (request, response) => {
  // fetch all user data in the database
  let users = await User.find({});

  response.json(users);
});

// Edit information on an Account
router.patch("/:id", async (request, response) => {
  try {
    // fetch user by id and update body data
    let result = await User.findByIdAndUpdate(request.params.id, request.body);
    response.json(result);
  } catch (error) {
    return response.status(500).send(error);
  }
});

// Delete Account
router.delete("/:id", async (request, response) => {
  try {
    // fetch user by id and remove from db
    await User.findByIdAndDelete(request.params.id);
    return response.status(200).send("User Deleted!");
  } catch (error) {
    return response.status(500).send(error);
  }
});

module.exports = router;