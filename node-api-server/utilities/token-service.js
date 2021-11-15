const mongojs = require("mongojs");
const jwt = require("jsonwebtoken");

const db = mongojs("career-job-fair", ["users"]);

const secretKey = "testing";

exports.requestToken = function (req, res, next) {
  var user = {
    email: req.body.username,
    password: req.body.password,
  };

  db.users.findOne({ email: user.email }, (err, stu_user) => {
    if (err) {
      reject({
        success: false,
      });
      return;
    } else {
      if (stu_user == null) {
        res.statusCode = 403;
        res.json({
          success: false,
          message: "Authentication Failed, User not Found....",
        });
      } else if (stu_user.password != user.password) {
        res.statusCode = 403;
        res.json({
          success: false,
          message: "Authentication Failed, Wrong Password....",
        });
      } else {
        var token = jwt.sign(stu_user, secretKey, { expiresIn: 1440 });
        res.statusCode = 200;
        res.json({
          success: true,
          message: "Authentication Success",
          token: token,
          role: stu_user.role,
        });
      }
    }
  });
};

exports.validateToken = function (req, res, next) {
  var token = req.headers["x-access-token"];

  if (token) {
    jwt.verify(token, secretKey, function (err, decoded) {
      if (err) {
        res.statusCode = 403;
        res.json({
          success: false,
          message: "Invalid Token Found",
        });
      } else {
        req.decoded = decoded;
        console.log(decoded);
        next();
      }
    });
  } else {
    res.statusCode = 403;
    res.json({
      success: false,
      message: "No Token Found",
    });
  }
};
