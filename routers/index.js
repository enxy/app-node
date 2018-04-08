const express = require('express');
const router = express.Router();
const users = require('../users.json');

var data={
  name: "Jack",
  surname: "Nowak",
  age: 27
}
router.get('/', function(req, res){
  res.render('index', {title:'Hey dude!'});
});

router.get('/users', function(req, res){
  res.render('login', {users: ["Kate", "Janny", "allan", "Nixk"]});
});

router.get('/users/detail', function(req, res){
  res.send('Detail right here');
});
router.get('/users/:id', function(req, res){
  res.render('profile', {id: req.params.id, user: users });
});
router.post('/test', function(req, res, next){
  var id = req.body.number;
  res.redirect('/users/'+id);
});

module.exports = router;
