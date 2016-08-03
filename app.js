var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;
var bodyParser = require('body-parser');
var sassMiddleware = require('node-sass-middleware');
var path = require('path');

var io = require('socket.io')(http);

// Configure app
app.set('views', './views');
app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(sassMiddleware({
  src: path.join(__dirname, 'assets', 'stylesheets'),
  dest: path.join(__dirname, 'public', 'stylesheets'),
  debug: true,
  outputStyle: 'compressed',
  prefix: '/stylesheets'
}));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', function(req, res) {
  res.render('index');
});
var users = require('./controllers/users');
app.use('/users', users);

// socket.io
io.on('connection', function(socket) {
  socket.on('msg', function(msg) {
    io.emit('msg', msg);
  });
});


http.listen(port, function() {
  console.log("Express server listening on %d in %s mode", port, app.settings.env);
});
