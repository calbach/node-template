/** Module dependencies. */
var express = require('express')
  , routes = require('./routes')

var port = process.env.PORT || 4000;
var app = module.exports = express.createServer();

/* App configuration. */
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'haml');
  app.register('.haml', require('hamljs'));
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(express.compiler({
    src: __dirname + '/public',
    enable: ['sass']
  }));
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

/* Development environment configuration. */
app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

/* Production environment configuration. */
app.configure('production', function(){
  app.use(express.errorHandler()); 
});

/* Routes. */
app.get('/', routes.index);

app.listen(port);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
