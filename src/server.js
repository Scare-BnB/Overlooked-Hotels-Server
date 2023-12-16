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
app.use('/locations', AccommodationRouter);

const ReviewRouter = require('./controllers/ReviewController');
app.use('/reviews', ReviewRouter);

const UserRouter = require('./controllers/UserController');
app.use('/users', UserRouter);

module.exports = {
    app
}