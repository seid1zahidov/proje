const mongoose = require('mongoose')

const Homeschema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: true
    },
    image: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: true
    },
    text_down:{
        type: String,
        required: true
    },
    text_link:{
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Custom',Homeschema)