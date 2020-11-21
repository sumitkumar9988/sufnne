const User = require('./../models/userModel');
const commonController = require('./commonController');

exports.getAllUsers = commonController.getAllUsers(User)
exports.updateMe = commonController.updateMe(User);  
exports.deleteMe = commonController.deleteMe(User)
exports.getUser = commonController.getUser(User)
exports.addSomeData=commonController.addSomeData(User)