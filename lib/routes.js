const express = require('express');
const router = express.Router();

const config = require('../config');
const apiRoutes = require('./api');

router.get('/', (req, res, next) => {
  res.render('index');
});

router.use('/api', apiRoutes);

module.exports = router;
