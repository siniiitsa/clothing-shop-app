const User = require("../models/User");
const { errorHandler } = require("../helpers/dbErrorHandler");
const { validationResult } = require('express-validator');
const jwt = require('jsonwebtoken'); // to generate signed jsonwebtoken
const expressJwt = require("express-jwt");
const config = require("config");

exports.signup = (req, res) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   return res.status(400).json({ errors: errors.array() });
  // };
  const user = new User(req.body);
  user.save((err, user) => {
    if (err) {
      return res.status(400).json({
        error: errorHandler(err)
      });
    };
    user.salt = undefined;
    user.hashed_password = undefined;
    return res.status(200).json({ user });
  })
};

exports.signin = (req, res) => {
  // find the user based on Email
  const { email, password } = req.body;
  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that email does not exist"
      });
    }
    // if user is found make sure that email and password matches
    // create auth method in user model
    if (!user.authenticate(password)) {
      return res.status(401).json({
        err: "Password don't match"
      });
    };
    const payload = {
      user: {
        id: user._id
      }
    }
    // generate a signed token with user id and secret
    jwt.sign(payload, config.get("jwtSecret"), {
      expiresIn: 360000
    }, (err, token) => {
      if (err) throw new Error(err);

      let { firstName, secondName } = user;

      res.json({ token, firstName, secondName })
    });
  });
};

exports.signout = (req, res) => {
  res.clearHeader("x-auth-token");
  res.json({ msg: "Signout success" });
};



