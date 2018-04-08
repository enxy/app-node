const express = require('express');
const router = express.Router();

router.get('/pp', function(req, res){
  res.render('index', {title:'Hey dude!', condition: true, anyArray: [1,2,3]});
});

module.exports = router;
