const connectDB = require('./db/connect');
const express = require("express");
const app = express();
const task = require('./routes/task');
require('dotenv').config();

// middelware
app.use(express.static('./public'));
app.use(express.json())


// routes
app.use('/api/v1/tasks', task)

const port =  8080;

const start = async () =>{
    try {
        await connectDB(process.env.MONGO_URL)
        app.listen(port, console.log(`Server is Listing to port : ${port} & DB Connected!`));
    } catch (error) {
        console.log(error);
    }
}

start()
