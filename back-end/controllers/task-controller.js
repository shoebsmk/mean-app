const Task = require('../models/task');

const getAllTasks = async (req,res) => {
    try {
        console.log("in tasks controller");
        const tasks = await Task.find({});
        res.json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const getOneTask = async (req,res) => {
    try {
        
        const {id} = req.params;
        console.log(`Getting task ${id}..`);
        const tasks = await Task.findById(id);
        res.status(200).json(tasks);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

const createTask = async (req, res) => {
    console.log("creating task..")
    const task = new Task({
        title: req.body.title,
        description: req.body.description
    });

    try {
        const newTask = await task.save();
        res.status(201).json(newTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

const deleteTask = async (req, res) => {
    try {
        console.log("Deleting..");
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        if(!deletedTask){
            res.json({"Task does not exist":""});
            return;
        }else{
            res.json(deletedTask);   
        }

    } catch (err) {
        
        res.status(500).json({ message: err.message });
    }
}

const patchTask = async (req, res) => {
    try {
        console.log("Patching..");
        const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(updatedTask);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
    getAllTasks,
    getOneTask,
    createTask,
    deleteTask,
    patchTask
}