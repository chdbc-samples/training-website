const mongoose = require('mongoose');

const rabbitSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    height: {
        type: Number,
        required: true
    },
    weight: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    description: String,
    dateAdded: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Rabbit', rabbitSchema);