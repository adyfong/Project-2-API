const { MongoClient } = require('mongodb');
const { ObjectID } = require('mongodb');

const dbConnection = 'mongodb://localhost:27017/iconCRUD';

function showAllFavorites(req, res, next) {
   console.log('in showallfavorite')
   MongoClient.connect(dbConnection, (err, db) => {
     if (err) return next(err)

      db.collection('favorite')
       .find()
       .toArray((arrayError, data) =>  {
        if (arrayError) return (next(arrayError));
        res.favorites = data;
        db.close();
        return next();
       }); //end of toarray
    });  // end of MongoClient
   } // end of showAllFavorites

function addToFavorites (req, res, next) {
  MongoClient.connect(dbConnection, (err, db) => {
    if (err) return(err);
    console.log('inaddfav ' + req.body);
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
  MongoClient.connect(dbConnection, (err, db) => {
  if (err) return next(err);

  db.collection('favorite')
  .findAndRemove({_id: ObjectID(req.params.id)}, (removeErr, doc) => {
    console.log('the req params' + req.params);
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
  addToFavorites,
  deleteFavorite,
}

