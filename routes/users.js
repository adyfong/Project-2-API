
const express = require('express');
const {createUser}  = require('../model/user.js')
const favoritesDB  = require('../model/favorites')
// const {authenticate} = require('../lib/auth');

const router = express.Router();

router.post('/', createUser, (req, res) => {
 res.redirect('/')
});

module.exports = router;


