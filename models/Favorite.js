const mongoose = require('mongoose');

// Define a Mongoose schema for Recipe
const favoriteRecipeSchema = new mongoose.Schema({
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

user: {
        type: String,
        required: true,
        },

});

// create a Mongoose model for Recipe
const Recipe = mongoose.model('Recipe', favoriteRecipeSchema);

// export the Recipe model to be used in other parts of the application
module.exports = Recipe;


// export function getUser() {
//     const token = getToken();
//     // If there's a token, return the user in the payload, otherwise return null
//     //console.log('GET USER',token ? JSON.parse(atob(token.split('.')[1])).user : null);
//     return token ? JSON.parse(atob(token.split('.')[1])).user : null;
// }
