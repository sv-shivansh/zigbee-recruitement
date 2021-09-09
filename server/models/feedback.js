const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const detailSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    usn:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    branch:{
        type: String,
        required: true
    },
    semester:{
        type: Number,
        required: true
    },
    rating:{
        type: String,
        required: true
    },
    feedback:{
        type: String,
        required: true
    },
    suggestion:{
        type: String,
    },
    date:{
        type: Date,
        default: Date.now
    }
})

// eslint-disable-next-line no-undef
module.exports = Feedback = mongoose.model('feedback_day_4', detailSchema)