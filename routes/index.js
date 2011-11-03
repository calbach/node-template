/* Initialize closure. */
require('nclosure').nclosure();

goog.require('example.Example');

/** GET home page. */
exports.index = function(req, res){
  res.render('index', {
    locals: {
      title: example.Example.title
    }
  });
};
