const express = require("express");
const exphbs = require("express-handlebars");

const app = express();
const PORT = process.env.port || 8080;
const routes = require("./controllers/burgers_controllers.js");



app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
app.use(express.static("public"));
app.use(routes);


app.listen(PORT, function(){
  console.log("App listening on PORT " + PORT);
})