const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const user = require("./models/user");
const app = express();
const mongo = require('mongo');

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes/users"))

app.get("/", function(req, res){
  res.render("index", {user: user.all});
})

///////// mongo code is going to be here taking over the app.listen functionality bellow//////
//////all mongo data is within the server file//////


app.listen(3010, function(){
  console.log("Node running successfully on http://localhost:3010");
});
