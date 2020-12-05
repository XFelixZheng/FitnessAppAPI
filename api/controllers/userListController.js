'use strict';

var mongoose = require('mongoose'),
User = mongoose.model('Users');

// list all users
exports.showUsers = function(req, res) {
  User.find({}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

// creates new user, not needed now
exports.createUser = function(req, res) {
  /*let new_user = new User(req.body);
  new_user.save(function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });*/
};

// show single user with specified username (if it exists)
exports.showSingleUser = function(req, res) {
  User.find({ username: req.params.username}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });
};

// update info of an single user with specified username, not needed now
exports.updateUser = function(req, res) {
  /*User.findOneAndUpdate({_id: req.params.username}, req.body, {new: true}, function(err, user) {
    if (err)
      res.send(err);
    res.json(user);
  });*/
};

// deletes single user with specified username, not needed now
exports.deleteUser = function(req, res) {
  /*User.remove({
    _id: req.params.username
  }, function(err, user) {
    if (err)
      res.send(err);
    res.json({ message: 'User successfully deleted' });
  });*/
};
