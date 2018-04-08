
const express = require('express');
//const router = express.Router();
const app=express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const child_process = require('child_process');
const hbs = require('express-handlebars');
const routes = require('./routers/index');


app.set('port', process.env.PORT || 8081);

app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views'}));
//var handlebars = require('express-handlebars').create({defaultLayout: 'main'});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(express.static(__dirname + '/public'));

app.use('/', routes);

app.listen(app.get('port'), function(){console.log('Server is running on port.')});
