// const { MongoClient } = require('mongodb');

const { getDB }    = require('../lib/dbConnect.js');
const { ObjectID } = require('mongodb');
// process.env.MONGOLAB_GREEN_URI ||
const dbConnection =  'mongodb://localhost:27017/iconCRUD';


function showAllFavorites(req, res, next) {

  // MongoClient.connect(dbConnection, (err, db) => {
  //    if (err) return next(err)
    getDB().then((db) => {
      db.collection('favorite')
       .find({})
       .toArray((arrayError, data) =>  {
        if (arrayError) return (next(arrayError));
        res.favorites = data;
        db.close();
        return next();
       }); //end of toarray
    });  // end of MongoClient
   } // end of showAllFavorites



function showAllUserFavorites(req, res, next) {
   // console.log('in showAllUserFavorites ' + req.session.userId)
   // MongoClient.connect(dbConnection, (err, db) => {
   //   if (err) return next(err)

    getDB().then((db) => {
      db.collection('favorite')
       .find({userid : String(req.session.userId)})
       .toArray((arrayError, data) =>  {
        if (arrayError) return (next(arrayError));
        console.log('...data is ' + data)
        res.favorites = data;
        db.close();
        return next();
       }); //end of toarray
    });  // end of MongoClient
   } // end of showAllFavorites


function addToFavorites (req, res, next) {

// MongoClient.connect(dbConnection, (err, db) => {
//      if (err) return next(err)
  getDB().then((db) => {
    db.collection('favorite')
      .insert(req.body.icon, (insertErr, result) => {
       if (insertErr)  return (next(inserErr));
       res.addToFavorites = result;
       db.close();
       return next();
      })
  });
}

function deleteFavorite (req, res, next) {

 getDB().then((db) => {
   db.collection('favorite')
   .findAndRemove({_id: ObjectID(req.params.id)}, (removeErr, doc) => {

  //remove the error
    if (removeErr) return (next(removeErr));
      res.removed = doc;
      db.close();
      return next();
     });
  return false;
  });
}

module.exports = {
  showAllFavorites,
  showAllUserFavorites,
  addToFavorites,
  deleteFavorite
}

