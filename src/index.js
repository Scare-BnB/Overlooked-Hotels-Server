require('dotenv').config();

const { connectToDatabase } = require('./database');
const { app } = require('./server');

const PORT = process.env.PORT || 4000;

app.listen(PORT, async () => {
    await connectToDatabase();
    console.log("Server running!");
});