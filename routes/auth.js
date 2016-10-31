const express  = require('express');
const {logIn}  = require('../model/auth');
const favoritesDB  = require('../model/favorites')

// Router
const router = express.Router();

router.post('/', logIn, favoritesDB.showAllUserFavorites, (req, res) => {
  console.log('req.session ' + req.session)
  console.log('res.user ' + res.user)
  res.render('profileIcon', {
  user: res.user,
  favorites: res.favorites,
  });
});

// router.get('/', favoritesDB.showAllFavorites, (req,res) => {
//     res.render('index', {
//     icon: res.icon,
//     favorites: res.favorites,
//    });
// });

// Logout by assigning null to the userId in the session
router.delete('/', (req, res) => {
  req.session.userId = null;
  res.redirect('/');
});

module.exports = router;
