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
    phone:{
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
    date:{
        type: Date,
        default: Date.now
    }
})

// eslint-disable-next-line no-undef
module.exports = Participant = mongoose.model('participant', detailSchema)