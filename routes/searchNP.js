const router = require('express').Router();
const {search} = require('../model/collect_icon');
const favoritesDB  = require('../model/favorites')


router.get('/searchIcon', search, favoritesDB.showAllFavorites, (req, res) => {
   res.render('show_icon', {
    icon: res.icon,
    favorites: res.favorites,
   });
});

module.exports = router;
