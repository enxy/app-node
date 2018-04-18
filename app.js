const http = require('http');
const hbs = require('express-handlebars');
const express = require('express');
const index = require('./routers/index');
const app = express();
const path = require('path');

app.set('port', process.env.PORT || 8082);
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.listen(app.get(''), function(){
  console.log('Server is running on port 8080');
});

app.use('/', index);
