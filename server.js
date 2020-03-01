const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.port || 8080;
const routes = require("./controllers/burgers_controllers.js");


app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(routes);


app.listen(PORT, '0.0.0.0', function(){
  console.log("App listening on PORT " + PORT);
})