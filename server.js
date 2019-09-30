const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8080;
const app = express();
app.use(favicon('food-recipes-app' + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static('food-recipes-app'));
app.use(express.static(path.join('food-recipes-app', 'build')));
app.get('/ping', function (req, res) {
 return res.send('pong');
});
app.get('/*', function (req, res) {
  res.sendFile(path.join('food-recipes-app', 'build', 'index.html'));
});
app.listen(port);