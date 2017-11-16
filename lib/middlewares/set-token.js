
const jwt = require('jsonwebtoken');
const uuidv4 = require('uuid/v4');

const config = require('../config');

module.exports = (req, res, next) => {
  const username = req.body.username;
  if (!username) {
    return next('username-required');
  }
  const payload = {
    id: uuidv4(),
    username
  };
  jwt.sign(payload, config.JWT_SECRET, {}, (err, token) => {
    if (err) {
      return next(err);
    }
    res.locals.token = token;
    req.headers.token = token;
    next();
  });
};
