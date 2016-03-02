var express = require('express');
var router = express.Router();

/* GET list of algorithms. */
router.get('/', function(req, res, next) {
  res.render('algorithms', { title: 'Algorithms' });
});

module.exports = router;
