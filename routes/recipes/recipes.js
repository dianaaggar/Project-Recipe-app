const express = require('express')
const router = express.Router();
const Recipe = require('../../controllers/recipes/recipes'); // import the Recipe model

// Create a new recipe
router.post('/', Recipe.createRecipe) 
router.get('/showrecipe', Recipe.showRecipe) 
router.post('/findrecipe', Recipe.findRecipe) 


// Get a list of all recipes
router.get('/', async (req, res) => {
try {
    const recipes = await Recipe.find();
    res.status(200).json(recipes);
} catch (err) {
    res.status(500).json({ error: err.message });
}});

// Get a specific recipe by ID
router.get('/:id', async (req, res) => {
try {
    const recipe = await Recipe.findById(req.params.id);
    if (!recipe) {
    res.status(404).json({ error: 'Recipe not found' });
    } else {
    res.status(200).json(recipe);
    }
} catch (err) {
    res.status(500).json({ error: err.message });
}});

// Update a recipe by ID
router.put('/:id', async (req, res) => {
try {
    const updatedRecipe = await Recipe.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
    );
    if (!updatedRecipe) {
    res.status(404).json({ error: 'Recipe not found' });
    } else {
    res.status(200).json(updatedRecipe);
    }
} catch (err) {
    res.status(500).json({ error: err.message });
}});

// Delete a recipe by ID
// router.delete('/:id', async (req, res) => {
// try {
//     const deletedRecipe = await Recipe.findByIdAndRemove(req.params.id);
//     if (!deletedRecipe) {
//     res.status(404).json({ error: 'Recipe not found' });
//     } else {
//     res.status(200).json({ message: 'Recipe deleted' });
//     }
// } catch (err) {
//     res.status(500).json({ error: err.message });
// }});

router.delete('/:id', Recipe.deleteRecipeById) 

module.exports = router;