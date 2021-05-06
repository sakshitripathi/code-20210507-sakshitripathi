var express = require("express"),
  app = express(),
  mongoose = require("mongoose"),
  Task = require("./api/model/person"), //created model loading here
  bodyParser = require("body-parser");

// mongoose instance connection url connection
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost:27017/Person", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var routes = require("./api/routes/personRoutes"); //importing route
routes(app); //register the route

app.listen(3001, function () {
  console.log("Server is running on port 3001");
});
