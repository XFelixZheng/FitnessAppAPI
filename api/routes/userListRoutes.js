'use strict';

module.exports = function(app) {
  // provides functions from controller to bind it on routes
  var userList = require('../controllers/userListController');

  // localhost api routes
  app.route('/fitnessapp-api/users')
    .get(userList.showUsers)
    //.post(userList.createUser);

  app.route('/fitnessapp-api/users/:username')
    .get(userList.showSingleUser)
    //.put(userList.updateUser)
    //.delete(userList.deleteUser);
};
