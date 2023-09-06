const Favorite = require('../../models/Favorite');

const favoriteRecipe = async (req, res) => {
    try {
    console.log(req.body)
        const newRecipe = await Favorite.find({userName: req.body.userName});
        res.status(201).json(newRecipe);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
    };

    