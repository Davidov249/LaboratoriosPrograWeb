var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/api/v1/music', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
