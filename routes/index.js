var express = require('express');
var router = express.Router();



var messages = [
  {text: "Tell me about your quarantine projects", user: "Micky", added: new Date()},
  {text: "I'm learning Node and Express!", user: "Eruvande", added: new Date()}
]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard', messages: messages });
});

router.get('/new', function(req, res, next) {
  res.render('new', { title: 'Enter new message'})
})

router.post('/new', function(req, res, next) {
   const message = req.body.messageText
   const user = req.body.user

   messages.push({text: message, user: user, added: new Date()})
  
   console.log(messages)
})



module.exports = router;
