
const jwt = require('jsonwebtoken');

const config = require('../config');

module.exports = (req, res, next) => {
  const token = req.headers.token || req.query.token;
  jwt.verify(token, config.JWT_SECRET, (err, payload) => {
    if (err || !payload) {
      return res.redirect('/register');
    }
    req.user = payload;
    next();
  });
};
