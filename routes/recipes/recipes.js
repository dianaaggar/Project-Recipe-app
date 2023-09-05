// const express = require('express');
// const router = express.Router();

// const recipesCtrl = require('../../controllers/api/users');

// const ensureLoggedIn = require('../../config/ensureLoggedIn');

// // POST /api/users
// router.post('/', recipesCtrl.create);

// // POST /api/users/login
// router.post('/login', recipesCtrl.login);

// // GET /api/users/check-token
// router.get('/check-token', ensureLoggedIn, recipesCtrl.checkToken);

// module.exports = router;
const express = require('express');
const mongoose = require('mongoose');
const recipe = require('../../routes/recipes/recipes');

const router = express.Router();

router.get('/', async (req, res) =>{
    try {
        const response = await recipe.find({})
        res.json(response)

    } catch (err) {
        res.json(err);

    }

});

router.post('/', async (req, res) =>{
    const recipe = new recipe(req.body)
    try {
        const response = await recipe.save();
        res.json(response)

    } catch (err) {
        res.json(err);

    }

});

router.put('/', async (req, res) =>{
    try {
    const recipe = await recipe.findById(req.body.recipeID);
    const user= await user.findById(req.body.userID);

    user.savedRecipes.push(recipe);
    await user.save();
    res.json({savedRecipes: user.savedRecipes});

    } catch (err) {
        res.json(err);

    }

});
router.get('/savedRecipes/ids', async (req, res)=> {
    try {
        const user = await User.findById(req.body.userID)
        res.json({savedRecipes: user?.savedRecipes})

    } catch (err) {
        res.json(err)
    }
})

router.get('/savedRecipes', async (req, res)=> {
    try {
        const user = await User.findById(req.body.userID)
        const savedRecipes = await recipe.find({
            _id: {$in: user.savedRecipes}
        })
        res.json({savedRecipes})

    } catch (err) {
        res.json(err)
    }
})



module.exports = router 