var express = require('express');
var router = express.Router();
var models = require('../models');

router.get('/', function(req, res) {
  models.User.findAll().then(function(users) {
    res.render('users/index', { users: users });
  });
});

router.post('/create', function(req, res) {
  models.User.create({
    username: req.body.username,
    name: req.body.name
  }).then(function() {
    res.redirect('/users');
  });
});

router.get('/:user_id/destroy', function(req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function() {
    res.redirect('/users');
  });
});

module.exports = router;
