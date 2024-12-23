const express = require('express')
const router = require('./routes/tasks')
const connectDB = require('./db/connect')
require('dotenv').config()

const app = express();
const PORT = 3000;

// Middleware
app.use(express.static('./public'));
app.use(express.json());

// Routes

// We will create API of our own, and we should also keep
// track of our version, that is why we will use the path
// 'api/v1/tasks'
app.use('/api/v1/tasks', router)

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(PORT, () => {
            console.log("Listening on port 3000");
        })
    } catch (error) {
        console.log(error);
    }
}

// We should first connect to the DB otherwise our application is useless, so we will kill our application
start();