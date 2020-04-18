var express = require('express');
var router = express.Router();

var messages = [
  {text: "Tell me about your quarantine projects", user: "Micky", added: new Date()},
  {text: "I'm learning Node and Express!", user: "Eruvande", added: new Date()}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Message Board', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Mini Message Board'})
})

router.post('/new', function(req, res, next) {
   messages.push({text: req.body.messageText, user: req.body.user, added: new Date()})
   res.redirect('/')
})



module.exports = router;
