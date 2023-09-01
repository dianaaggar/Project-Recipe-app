const express = require('express');
const router = express.Router();
const recipesCtrl = require('../../controllers/api/users');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// POST /api/users
router.post('/', recipesCtrl.create);

// POST /api/users/login
router.post('/login', recipesCtrl.login);

// GET /api/users/check-token
router.get('/check-token', ensureLoggedIn, recipesCtrl.checkToken);

module.exports = router;