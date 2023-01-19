const mongoose = require('mongoose')

const Aboutschema = new mongoose.Schema({
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
    }
})

module.exports = mongoose.model('About',Aboutschema)