const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const user = require("./models/user");
const app = express();
//////mongo connections//////
const client = require("./dbConnections");

app.set("port", process.env.PORT || 3010);

app.engine("mustache", mustacheExpress());
app.set("views", "./views");
app.set("view engine", "mustache");

app.use(express.static(path.join(__dirname, "public")));
app.use(require("./routes/users"))

app.get("/", function(req, res){
  res.render("index", {user: user.all});
})

if (require.main === module) {
  client.connect((client) => {
    app.listen(app.get("port"), err => {
      if (err) {
        throw err;
        exit(1);
      }
      console.log(`Node running in ${app.get("env")} mode @ http://localhost:${app.get("port")}`);
    })
  })
}
