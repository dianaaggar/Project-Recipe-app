// Import the required modules
const mongoose = require('mongoose');

// Define a Mongoose schema for Recipe
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
    type: String,
    required: true,
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
// userOwner: {
//     type: mongoose.Schema.Types.ObjectId,
//     ref: 'User',
//     required: true,
//     },
});

// Create a Mongoose model for Recipe
const Recipe = mongoose.model('Recipe', recipeSchema);

// Export the Recipe model to be used in other parts of the application
module.exports = Recipe;
