const router = require('express').Router();
const favoritesDB  = require('../model/favorites')

router.get('/', favoritesDB.showAllFavorites, (req,res) => {
    res.render('index', {
    icon: res.icon,
    favorites: res.favorites,
   });
});

// This route serves your `/login` form
router.get('/login', (req, res) => {
  res.render('login');
});

// This route serves your `/signup` form
router.get('/signup', (req, res) => {
  res.render('signup');
});


module.exports = router;
