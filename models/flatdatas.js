const mongoose = require("mongoose");
const validator = require("validator");

const flatSchema = new mongoose.Schema({
    Flatname: {
        type: String,
        required: true,
        minlength: 3
    },
    location: {
        type: String,
        required: true,
        minlength: 3
    },
    price: {
        type: Number,
        min: 10,
        required: true
    },
    Bedcount: {
        type: Number,
        required: true,
        minlength: 3
    },
    Bathcount: {
        type: Number,
        required: true,
        minlength: 3
    },
    Squarefeet: {
        type: String,
        required: true,
        minlength: 3
    },
    Rating: {
        type: Number,
        required: true,
        minlength: 3
    }
})

// we will create a new Collection
// We define the models

const Flatdata = new mongoose.model('Flat', flatSchema);

module.exports = Flatdata;