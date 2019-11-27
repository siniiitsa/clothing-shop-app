const User = require("../models/User");
const History = require("../models/History");
const { errorHandler } = require("../helpers/dbErrorHandler");
const jwt = require("jsonwebtoken"); // to generate signed jsonwebtoken
const expressJwt = require("express-jwt");
const config = require("config");

exports.checkAuth = expressJwt({
  secret: config.get("jwtSecret"),
  userProperty: "auth"
});

decodedID = (req, res) => {
  const bearerHeader = req.headers["authorization"];
  if (typeof bearerHeader !== "undefined") {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    const token = bearerToken;
    var decoded = jwt.decode(token, { complete: true });
    console.log(decoded.header);
    console.log(decoded.payload);
    return decoded.payload.user.id;
  } else {
    // Forbidden
    res.sendStatus(403);
  }
};

exports.profile = (req, res) => {
  // find the user based on id
  const _id = decodedID(req, res);
  User.findOne({ _id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that id does not exist"
      });
    }
    const { phone, firstName, lastName, birthday, email } = user;

    res.json({ phone, firstName, lastName, birthday, email });
  });
};

exports.addressBook = (req, res) => {
  // find the user based on id
  const _id = decodedID(req, res);
  User.findOne({ _id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that id does not exist"
      });
    }
    const { addressFirst, addressSecond } = user;

    res.json({ addressFirst, addressSecond });
  });
};

exports.updateUser = (req, res) => {
  // find the user based on id

  const _id = decodedID(req, res);
  // let usser;
  User.findOne({ _id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that id does not exist"
      });
    }
    console.log(user);
    const { lastName, birthday} = req.body;
    user.lastName = lastName;
    user.birthday = birthday;

    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      // user.salt = undefined;
      // user.hashed_password = undefined;
      return res.status(200).json({ user });
    });
  });
};

exports.updateAddress = (req, res) => {
  // find the user based on id

  const _id = decodedID(req, res);
  // let usser;
  User.findOne({ _id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that id does not exist"
      });
    }
    console.log(user);
    const { addressFirst, addressSecond} = req.body;
    user.addressFirst = addressFirst;
    user.addressSecond = addressSecond;

    user.save((err, user) => {
      if (err) {
        return res.status(400).json({
          error: errorHandler(err)
        });
      }
      return res.status(200).json({ user });
    });
  });
};

exports.deliteUser = (req, res) => {
  // find the user based on id
  const _id = decodedID(req, res);
  User.deleteOne({ _id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that id does not exist"
      });
    }

    return res.json("Ok!");
  });
};
// ============================================================================================
exports.history = async (req, res) => {
  // find the user based on id

  const _id = decodedID(req, res);

  const userHistory = await History.find({ author: _id }, (err, user) => {
    if (err || !user) {
      return res.status(400).json({
        err: "User with that id does not exist"
      });
    }
  });
  console.log(
    userHistory[0].userHistory,
    "=========================================="
  );
  return res.send(userHistory[0].userHistory);
};
// ===========================================================================================
exports.addHistory = async (req, res) => {
  const _id = decodedID(req, res);
  let history = [];
  let userHistory = {
    userHistory: req.body,
    author: _id
  };
  const verify = await History.findOne({ author: _id });
  if (!verify) {
    History.CreatHistory(new History(userHistory), (err, list) => {
      if (err || !list) {
        return res.status(400).json({
          err: "User with that id does not exist"
        });
      }
    });
  } else {
    History.findOne({ author: _id }, (err, person) => {
      let jsonsringHistory = JSON.stringify(person.userHistory);
      let parseStory = JSON.parse(jsonsringHistory);
      parseStory.forEach(function(element) {
        history.push(element);
      });
      req.body.forEach(function(element) {
        history.push(element);
      });
      History.findByIdAndUpdate(
        person._id,
        { userHistory: history },
        (err, doc) => {
          if (err || !doc) {
            return res.status(400).json({
              err: "User with that id does not exist"
            });
          }
        }
      );
    });
  }
};
