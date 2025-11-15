const mongoose = require('mongoose');

const foodSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category:{
        type: String,
        required: true,
        enum: ['veg','non-veg','drinks','desserts','snacks']
    },
    price:{
        type: Number,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    available:{
        type: Boolean,
        default: true
    }
},{timestamps: true});

module.exports = mongoose.model('Food',foodSchema);