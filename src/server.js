const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());

app.use(cors());

app.get("/", (request, response) => {
    response.json({  
    });
});

const AccommodationRouter = require('./controllers/AccommodationController');
app.use ('/locations', AccommodationRouter);

module.exports = {
    app
}