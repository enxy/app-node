
const express = require('express');
//const router = express.Router();
const app=express();
const fs = require('fs');
const bodyParser = require('body-parser');
const path = require('path');
const child_process = require('child_process');
const hbs = require('express-handlebars');
const routes = require('./routers/index');

app.set('port', process.env.PORT || 8082);
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views'}));
app.set('views', path.join(__dirname, '/views'));
app.set('view engine');

app.use(express.static(path.join(__dirname, '/public')));

app.use('/', routes);

app.listen(app.get('port'), function(){console.log('Server is running on port.')});
