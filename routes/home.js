const router = require('express').Router();
const favoritesDB  = require('../model/favorites')

router.get('/', favoritesDB.showAllFavorites, (req,res) => {
    res.render('index', {
    icon: [],
    favorites: res.favorites,
   });
});

module.exports = router;
