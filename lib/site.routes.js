const express = require('express');
const router = express.Router();

const setToken = require('./middlewares/set-token');
const getToken = require('./middlewares/get-token');

router.get('/', getToken, (req, res, next) => {
  res.render('index', {
    user: req.user,
    token: res.locals.token
  });
});

router.get('/register', (req, res, next) => {
  res.render('register', {
    layout: 'simple'
  });
});

router.post('/join', setToken, getToken, (req, res, next) => {
  // Successfully joined:
  res.redirect('/?token=' + res.locals.token);
});

router.get('/testing', getToken, (req, res, next) => {
  googleMaps.search('Linköping').then(data => {
    console.log(data);
    const spotAddress = data.address_components
      .map(location => location.long_name)
      .join(', ');
    res.render('index', { spotAddress });
  }, next);
});

module.exports = router;
