const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must Provided a Name'],
        trim: true,
        maxlength: [20, 'Name can not be morethan 20 charectors']
    },
    compleated: {
        type: Boolean,
        default: false,
    }
})

module.exports = mongoose.model('Task', TaskSchema)