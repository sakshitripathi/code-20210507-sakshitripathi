"use strict";
module.exports = function (app) {
  var controllers = require("../controllers/personController");

  // todoList Routes
  app.route("/calculateBmi").post(controllers.calculateBmi);
  app.route("/countOverWeight").get(controllers.countOverWeight);
};
