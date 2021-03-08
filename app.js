
/**
 * Module dependencies.
 */

var express = require('express');
var http = require('http');
var path = require('path');
var handlebars = require('express3-handlebars')

var index = require('./routes/index');
// Example route
// var user = require('./routes/user');
var homepage = require('./routes/homepage');
var recipe = require('./routes/recipe');
var recipecard = require('./routes/recipecard');
var share = require('./routes/share');
var message = require('./routes/message');
var profile = require('./routes/profile');
var instructions = require('./routes/instructions');
var upload = require('./routes/upload');
var favorites = require('./routes/favorites');
var help = require('./routes/help');
var register = require('./routes/register');
var MYinstructions = require('./routes/MYinstructions');
var MYrecipecard = require('./routes/MYrecipecard');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.engine('handlebars', handlebars());
app.set('view engine', 'handlebars');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser('IxD secret key'));
app.use(express.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));


// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', index.view);
// Example route
// app.get('/users', user.list);
app.get('/homepage', homepage.view);
app.get('/recipe', recipe.view);
app.get('/index', index.view);
app.get('/recipecard', recipecard.view);
app.get('/share', share.view);
app.get('/message', message.view);
app.get('/profile', profile.view);
app.get('/instructions', instructions.view);
app.get('/favorites', favorites.view);
app.get('/upload', upload.view);
app.get('/help', help.view);
app.get('/register', register.view);
app.get('/MYinstructions', MYinstructions.view);
app.get('/MYrecipecard', MYrecipecard.view);


http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
