const User = require('./../models/userModel');
const commonController=require('./commonController')

exports.signup = commonController.signup(User);
exports.login = commonController.login(User);
exports.protect = commonController.protect(User);
exports.forgotPassword = commonController.forgotPassword(User);
exports.resetPassword = commonController.resetPassword(User);
exports.updatePassword = commonController.updatePassword(User);