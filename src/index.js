require('dotenv').config();

const { connectToDatabase } = require('./database');
const { app } = require('./server');

app.listen(3000, async () => {
    await connectToDatabase();
    console.log("Server running!");
});