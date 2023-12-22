const { User } = require('../models/UserModel');
const request = require('supertest');
const { response } = require('express');


describe("Get existing user", () => {
    test("GET route gets existing user data", () => {
        const getUser = request(User).get("/:id");
        expect(response.body).toEqual(getUser.body);
    });
})

describe("Create a new user", () => {
    test("POST route creates a new user", () => {
        const loginUser = request(User).post("/");
        const newUser = {
            email: "user1@email.com",
            password: "password"
        }
        expect(loginUser.body).toEqual(newUser.body);
    })
})