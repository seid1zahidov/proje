const mongoose = require('mongoose')

const Markaschema = new mongoose.Schema({
    id: { 
        type: Number, 
        required: true
    },
    image: {
        type: String,
        required: true
    },
})

module.exports = mongoose.model('Marka',Markaschema)