const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
  res.json({msg: 'I am alive.'});
});

router.post('/me', (req, res, next) => {
  res.json({msg: 'I am alive.'});
});


module.exports = router;
