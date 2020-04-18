var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome to the mini-message board' });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Enter new message'})
})

module.exports = router;
