const express = require('express');

const app = express();

app.use(express.json());

app.get("/", (request, response) => {
    response.json({  
    });
});

const AccommodationRouter = require('./controllers/AccommodationController');
app.use ('/locations', AccommodationRouter);

module.exports = {
    app
}