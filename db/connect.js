const mongoose = require('mongoose')

// Database name -> TaskManager

const connectDB = (url) => {
    return mongoose
        .connect(url)
        .then(() => console.log('Connected to Database'))
        .catch((err) => console.log(err));
}

module.exports = connectDB