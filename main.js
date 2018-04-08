
const express = require('express');
const app=express();
const fs = require('fs');
const bodyParser = require('body-parser');
const child_process = require('child_process');

app.set('port', process.env.PORT || 8081);

app.get('/user_form', function(req, res){
  res.sendFile(__dirname+"/form.html");
})
app.get('/form', function(req, res){
  data={
    username: req.query.first_name,
    lastname: req.query.last_name
  }
  console.log(data);
  res.end(JSON.stringify(data));
});

app.get('/users', function(req, res){
  fs.readFile(__dirname+'/users.json', 'utf8', function(err, data){
    data = JSON.parse(data);
    console.log(typeof data);
    res.end(JSON.stringify(data));
  });
});
app.get('/users/add', function(req, res){
  fs.readFile(__dirname+'/users.json', function(err, data){
    if(err){
      console.log('Not open file');
      return;
    }else{
      var users = JSON.parse(data);
      users['user4'] = user['user4'];
      data = JSON.stringify(users);
      res.end(data);
    }
  });
});
app.get('/users/:id', function(req, res){
  fs.readFile(__dirname+'/users.json', function(err, data){
    var users = JSON.parse(data);
    var user = users['user'+req.params.id];
    res.end(JSON.stringify(user));
  });
});
app.delete('/users/delete/:id', function(req, res){
  fs.readFile(__dirname+'/users.json', function(err, data){
    var users = JSON.parse(data);
    delete users['user' + req.params.id];
    res.end(JSON.stringify(users));
  });
});


app.get('/ab*cd', function(req, res){
  console.log('GET for /abcd');
  res.send('Hello get');
});
app.post('/user', function(req, res){
  res.send('Hello res');
});
app.delete('/del_user', function(req, res){
  res.send('Delete user')
});

app.get('/new', function(req, res){
  res.send('The Node works');
});

app.listen(app.get('port'), function(){console.log('Server is running on port.')});
