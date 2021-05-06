"use strict";
var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var PersonSchema = new Schema({
  gender: {
    type: String,
  },

  heightCm: {
    type: Number,
  },

  weightKg: {
    type: Number,
  },

  bmi: {
    type: Number,
  },

  bmicategory: {
    type: String,
  },

  healthrisk: {
    type: String,
  },
});

module.exports = mongoose.model("Person", PersonSchema);
