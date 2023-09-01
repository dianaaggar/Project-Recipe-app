// create schema for the recipe
const mongoose = require('mongoose');

const recipeSchema = new mongoose.Schema({
name: {
    type: String,
    required: true,
    },
description: {
    type: String,
    required: true,
    },
ingredients: [
    {
    name: {
        type: String,
        required: true,
        },
    quantity: {
        type: String, 
        required: true,
        },
    },
    ],
instructions: {
    type: String,
    required: true,
    },
imageUrl: {
    type: String,
    required: true,
    },
cookingTime: {
    type: Number,
    required: true,
    },
createdAt: {
    type: Date,
    default: Date.now,
    },
});

module.exports = mongoose.model('Recipe', recipeSchema);

