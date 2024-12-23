const mongoose = require('mongoose')

// Setting up the structure of the document
// We are using validators inside values
const TaskSchema = new mongoose.Schema({
    name: {
        // Type of data
        type: String,
        // Make this field as required
        required: [true, "Must provide a name"],
        // Remove unwanted Spaces
        trim: true,
        // Set up max size
        maxLength: [20, 'Name cannot be more than 20 characters']
    },
    completed: {
        type: Boolean,
        default: false
    }
});

// Models are constructions from Schema
// An instance of model is called document
// Models are required to creating and reading documents from the
// underlying MongoDB database
module.exports = mongoose.model('Task', TaskSchema)