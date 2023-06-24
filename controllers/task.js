const Task = require('../models/task')

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({})
        res.status(200).json({ tasks })
    } catch (error) {
        res.status(500).json({ msg: error })
    }
}

const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({task});
    } catch (error) {
        res.status(500).json({ msg:error });
    }
}

const getTask = async (req, res) => {
    try {
        const { id:taskID} = req.params;
        const singleTask = await Task.findOne({_id:taskID});
            if(!singleTask){
                return res.status(404).json({ msg: `no task in ${taskID}`});
            }
        res.status(200).json({singleTask});
    } catch (error) {
        res.status(500).json({ msg:error });
    }
}

const updateTask = async(req, res) => {
    try {
        const { id:taskID} = req.params;
        const updTask = await Task.findByIdAndUpdate({ _id:taskID}, req.params,{
            new: true,
            runValidators: true,
        });
            if(!updTask){
                return res.status(404).json({ msg: `no task in ${taskID}`})
            }
    } catch (error) {
        res.status(500).json({ msg:error });
    }
}

const deleteTask = async(req, res) => {
    try {
        const { id:taskID } = req.params;
        const delTask = await Task.findOneAndDelete({ _id:taskID });
            if(!delTask){
                return res.status(404).json({ msg: `no task in ${taskID}`});
            }
        res.status(200).json({delTask});
    } catch (error) {
        res.status(500).json({ msg:error });
    }
}

module.exports = {
    getAllTasks,getTask,createTask,updateTask,deleteTask
}