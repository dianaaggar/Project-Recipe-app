// // these are the request in response functions that response to the frontend request on these /recipes path

const Recipe = require('../../models/Recipe');

// Create a new recipe
const createRecipe = async (req, res) => {
try {
  console.log(req.body)
    const newRecipe = await Recipe.create(req.body);
    res.status(201).json(newRecipe);
} catch (err) {
    res.status(400).json({ error: err.message });
}
};


// Get a list of all recipes
const showRecipe = async (req, res) => {
  try {
    const recipes = await Recipe.find({});
    console.log(recipes)
  
    res.status(200).json(recipes);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get a specific recipe by ID
const findRecipe = async (req, res) => {
  console.log("checking",req.body.id)
  try {
    console.log(req.body)
    const recipe = await Recipe.findById(req.body.id);
    if (!recipe) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      res.status(200).json(recipe);
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Update a recipe by ID
const updateRecipeById = async (req, res) => {
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
  }
};

// Delete a recipe by ID
const deleteRecipeById = async (req, res) => {
  try {
    const deletedRecipe = await Recipe.findByIdAndRemove(req.params.id);
    if (!deletedRecipe) {
      res.status(404).json({ error: 'Recipe not found' });
    } else {
      res.status(200).json({ message: 'Recipe deleted' });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


module.exports = {
  createRecipe,
  showRecipe,
  findRecipe,
  updateRecipeById,
  deleteRecipeById,
};


