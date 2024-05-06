// routes/todos.js

const express = require('express');

const router = express.Router();
const Task = require('../models/task');

const {getAllTasks, getOneTask, createTask, deleteTask, patchTask} = require("../controllers/task-controller.js")

// GET all todos
router.get('/', getAllTasks);

// GET one task
router.get('/:id', getOneTask);

// POST a new task
router.post('/', createTask);

// DELETE a task
router.delete('/:id', deleteTask);

// PATCH/update a task
router.patch('/:id', patchTask);

module.exports = router;
