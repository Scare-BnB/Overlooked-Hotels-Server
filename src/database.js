const mongoose = require('mongoose');

async function connectToDatabase(){
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected");
    } catch (error) {
        console.error("Failed to connect to database");
    }
}

module.exports = {
    connectToDatabase
}