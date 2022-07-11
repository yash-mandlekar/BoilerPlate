var express = require('express');
var router = express.Router();
const homedir = require('os').homedir();
const fs = require('fs');

/* GET home page. */
router.get('/', function(req, res) {
  console.log(homedir);
  res.render('index');
});

var index = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <h1> Hello From BoilerPlate </h1>
</body>
</html>`;

var style = `*{
  margin: 0%;
  padding: 0%;
  box-sizing: border-box;
}
html,
body{
  height: 100%;
  width: 100%;
}
`

router.post('/create', function(req, res) {
  // fs.mkdirSync(homedir + '/' + req.body.name);
  // fs.writeFile(homedir + '/' + req.body.name + '/index.html', index, function(err) {});
  // fs.writeFile(homedir + '/' + req.body.name + '/style.css', style, function(err) {});
  // fs.writeFile(homedir + '/' + req.body.name + '/script.js', "", function(err) {});
  // res.redirect('/');
  res.send(homedir)
});

module.exports = router;
