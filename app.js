const express = require('express');
const mustacheExpress = require('mustache-express');
const path = require('path');
const user = require('./models/user');
const app = express();

app.use(require("./routes/users"))

app.engine('mustache', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mustache');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res){
  res.render('index', data);
})

app.listen(3000, function(){
});
