const { body } = require("express-validator");

exports.signupValidator = [
  body("email").isEmail(),
  body("password").isLength({ min: 8 })
];

exports.loginValidator = [
  body("email").isEmail(),
  body("password").notEmpty()
];
