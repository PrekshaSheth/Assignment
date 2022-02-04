const mongoose = require('mongoose')

const studentSchema = new mongoose.Schema({

    name : {
        type: String,
       // required: true
    },
    course : {
        type: String,
       // required: true
    },
    semester : {
        type: String,
       // required: true
    },
    university : {
        type: String,
       // required: true
    }

})


module.exports = mongoose.model('student',studentSchema)