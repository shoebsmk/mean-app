const express = require('express');
const Task = require('./models/task');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

// Middleware
app.use(express.json());

// Routes
const tasksRouter = require('./routes/tasks');
const { default: mongoose } = require('mongoose');
app.use( tasksRouter);

const PORT = process.env.PORT || 4001;
mongoose.connect('mongodb+srv://mohammedkhancode:PN00nS4SD6wQbEjo@backenddb.a3c11h5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=BackendDB')
    .then(() => {
        console.log("Connected to Database!"),
        app.listen(PORT, () => {
            console.log(`Server is running on port ${PORT}`);
        })
    })
    .catch(() => {console.log("Failed to connect!")})

//Password node
//PN00nS4SD6wQbEjo

//npm install mongodb
//mongodb+srv://mohammedkhancode:PN00nS4SD6wQbEjo@backenddb.a3c11h5.mongodb.net/?retryWrites=true&w=majority&appName=BackendDB
