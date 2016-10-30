// const OAuth = require('oauth');

function search(req, res, next) {
console.log('*** In Search.')
var NounProject = require('the-noun-project'),
nounProject = new NounProject({
    key: process.env.NOUNPROJECT_KEY,
    secret: process.env.NOUNPROJECT_SECRET
});

const qs = req.query;

if ('icon' in qs) icon = qs.icon;


nounProject.getIconsByTerm(icon, function(err, data){
  if (!err) {
       res.icon = data.icons;
      return next();

  }
  console.log('error ' + err);
});

}

module.exports = {search};
