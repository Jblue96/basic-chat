var express = require('express');
var app = express();
var http = require('http').Server(app);
var port = process.env.PORT || 3000;

var io = require('socket.io')(http);

// Configure app
app.set('views', './views');
app.set('view engine', 'pug');

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
