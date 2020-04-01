require('dotenv').config();
var express = require("express");
var exphbs = require("express-handlebars");
var routes = require("./controllers/burgers_controller");
var methodOverride = require('method-override');

var PORT = process.env.PORT || 8040;
var app = express();

app.use(methodOverride("_method"));

app.use(express.static("public"));

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

app.listen(PORT, function() {
  console.log("Server listening on: http://localhost:" + PORT);
});