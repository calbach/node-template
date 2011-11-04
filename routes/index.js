/* Initialize closure. */
require('nclosure').nclosure();

goog.require('server.Example');

/** GET home page. */
exports.index = function(req, res){
  res.render('index', {
    locals: {
      title: server.Example.title
    }
  });
};
