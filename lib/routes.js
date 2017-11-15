const express = require('express');
const router = express.Router();

const apiRoutes = require('./api');

const googleMaps = require('./google-maps');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.get('/testing', (req, res, next) => {
  googleMaps.search('Linköping').then(data => {
    console.log(data);
    const spotAddress = data.address_components
      .map(location => location.long_name)
      .join(', ');
    res.render('index', { spotAddress });
  }, next);
});

router.use('/api', apiRoutes);

module.exports = router;
