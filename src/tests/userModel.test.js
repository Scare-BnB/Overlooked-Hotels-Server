const { User } = require('../models/UserModel');
const request = require('supertest');
const { app } = require('../server');
const { response } = require('express');

describe("Get existing user", () => {
    test("GET route gets existing user data", () => {
        const getUser = request(User).get("/:id");
        expect(response.body).toEqual(getUser.body);
    });
})