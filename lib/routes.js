const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

const apiRoutes = require('./api');
const siteRoutes = require('./site.routes');

const config = require('./config');
const googleMaps = require('./google-maps');

router.use(bodyParser.urlencoded({ extended: false }));
router.use(bodyParser.json());

router.use(siteRoutes);
router.use('/api', apiRoutes);

router.use((err, req, res, next) => {
  res.render('error', {
    layout: 'simple',
    err
  });
});


module.exports = router;
