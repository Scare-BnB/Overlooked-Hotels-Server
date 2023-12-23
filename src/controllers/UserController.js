const { User } = require("../models/UserModel");
const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { generateJwt } = require("../functions/userAuthFunctions");

// Create a NEW Account
router.post("/register", async (request, response) => {
  let newUser = await User.create(request.body).catch((error) => {
    return error;
  });

  response.json(newUser);
});

router.post("/login", async (request, response) => {
  try {
    let targetUser = await User.findOne({
      email: request.body.email,
    });
    const isPasswordCorrect = await bcrypt.compare(request.body.password, targetUser.password);

    if (!isPasswordCorrect) {
      return response
        .status(403)
        .json({ error: "You are not authorized to do this." });
    }

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
  let users = await User.find({});

  response.json(users);
});

// Login to an Account
router.get("/:id", async (request, response) => {
  let result = await User.findOne({ _id: request.params.id });

  response.json({ result });
});

// Edit information on an Account
router.patch("/", async (request, response) => {
  try {
    let result = await User.findByIdAndUpdate(request.params.id, request.body);
    response.json(result);
  } catch (error) {
    return response.status(500).send(error);
  }
});

// Delete Account
router.delete("/", async (request, response) => {
  try {
    await User.findByIdAndDelete(request.params.id);
    return response.status(200).send("User Deleted!");
  } catch (error) {
    return response.status(500).send(error);
  }
});

module.exports = router;