var express = require('express');
var router = express.Router();
var _und = require('underscore');

// DB
var dbUrl = process.env.DATABASE_URL; // 'postgres://user:pass@example.com:5432/dbname'
var dbExists = _und.isString(dbUrl);
var sequelize;
if (dbExists) {
  sequelize = new Sequelize(db_url);

  sequelize.authenticate()
  .then(function(err) {
    dbExists = true;
  })
  .catch(function(err) {
    dbExists = false;
  });
}


// User records
var users = [
  { username: "test", name: "Test User" },
  { username: "jdoe", name: "John Doe" }
];
var User;
if (dbExists) {

  User = sequelize.define('user', {
    username: {
      type: Sequelize.STRING
    },
    name: {
      type: Sequelize.STRING
    }
  });

  User.sync({ force: true }).then(function() {
    return User.create({
      username: "jdoe",
      name: "John Doe"
    })
  });

}

router.get('/', function(req, res) {
  if (dbExists) {
    User.findAll().then(function(user_records) {
      res.render('users/index', { users: user_records });
    });
  } else {
    res.render('users/index', { users: users });
  }
});

module.exports = router;
