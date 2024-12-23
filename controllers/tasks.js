const Task = require('../models/Task')

// Important CRUD functions
// https://mongoosejs.com/docs/api/model.html

// Model.$where()
// Model.aggregate()
// Model.applyDefaults()
// Model.applyTimestamps()
// Model.applyVirtuals()
// Model.bulkSave()
// Model.bulkWrite()
// Model.castObject()
// Model.cleanIndexes()
// Model.countDocuments()
// Model.create()
// Model.createCollection()
// Model.createIndexes()
// Model.createSearchIndex()
// Model.db
// Model.deleteMany()
// Model.deleteOne()
// Model.diffIndexes()
// Model.discriminator()
// Model.distinct()
// Model.dropSearchIndex()
// Model.ensureIndexes()
// Model.estimatedDocumentCount()
// Model.events
// Model.exists()
// Model.find()
// Model.findById()
// Model.findByIdAndDelete()
// Model.findByIdAndUpdate()
// Model.findOne()
// Model.findOneAndDelete()
// Model.findOneAndReplace()
// Model.findOneAndUpdate()
// Model.hydrate()
// Model.init()
// Model.insertMany()
// Model.inspect()
// Model.listIndexes()
// Model.listSearchIndexes()
// Model.namespace()
// Model.populate()
// Model.prototype.$model()
// Model.prototype.$where
// Model.prototype.base
// Model.prototype.baseModelName
// Model.prototype.collection
// Model.prototype.collection
// Model.prototype.db
// Model.prototype.deleteOne()
// Model.prototype.discriminators
// Model.prototype.increment()
// Model.prototype.model()
// Model.prototype.modelName
// Model.prototype.save()
// Model.recompileSchema()
// Model.replaceOne()
// Model.schema
// Model.startSession()
// Model.syncIndexes()
// Model.translateAliases()
// Model.updateMany()
// Model.updateOne()
// Model.updateSearchIndex()
// Model.validate()
// Model.watch()
// Model.where()

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({tasks: tasks});
    }
    catch (error){
        res.status(500).json({err: error});
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task: task});
    }
    catch (error) {
        res.status(500).json({err: error});
    }
}

const getTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOne({_id: taskID});

        if (!task) {
            return res.status(404).json({mgs: `No task with ID: ${taskID}`});
        }

        res.status(200).json({task: task});
    }
    catch (error) {
        res.send(500).json({err: error});
    }
}

const deleteTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        const task = await Task.findOneAndDelete({_id: taskID});

        if (!task) {
            return res.status(404).json({msg: `No task with ID: ${taskID}`});
        }

        res.status(200).json({task: task});
    }
    catch (error) {
        res.send(500).json({err: error});
    }
}

const updateTask = async (req, res) => {
    try {
        const {id: taskID} = req.params;
        // Options argument is important, and it is also interesting
        const task = await Task.findOneAndUpdate({_id: taskID},
            req.body,
            {
                // If true, return the modified document rather than the original
                new: true,
                // If true, runs update validators on this command. Update validators validate the update operation against the model's schema
                runValidators: true
            });

        if (!task) {
            return res.status(404).json({err: `No task with ID: ${taskID}`});
        }

        res.status(200).json({task: task})
    }
    catch (error) {
        res.status(500).json({err: error});
    }
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}