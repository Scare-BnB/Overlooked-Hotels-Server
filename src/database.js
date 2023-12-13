const mongoose = require('mongoose');

async function connectToDatabase(){
    try {
        await mongoose.connect(process.env.DB_URI);
        console.log("Database connected");
    } catch (error) {
        console.error("Failed to connect to database");
    }
}

async function disconnectFromDatabase(){
    await mongoose.connection.close();
}

module.exports = {
    connectToDatabase,
    disconnectFromDatabase
}