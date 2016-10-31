const router = require('express').Router();
const {search} = require('../model/collect_icon');
const favoritesDB  = require('../model/favorites')

router.get('/', favoritesDB.showAllUserFavorites, (req, res) => {
   res.render('profileFavo', {
   favorites: res.favorites,
   });

   // res.render('index', {
   //  icon: res.icon,
   //  favorites: res.favorites,
   // });
});

router.post('/addFavorite',  favoritesDB.addToFavorites, (req, res) => {
  console.log('this is req' + req.body);
  res.redirect('/favorites/');
});


// favoritesDB.deleteFavorite

router.delete('/deleteFavorite/:id', favoritesDB.deleteFavorite, (req, res) => {
   console.log('this is params' + req.params);
   res.redirect('/favorites/');
  });

module.exports = router;
