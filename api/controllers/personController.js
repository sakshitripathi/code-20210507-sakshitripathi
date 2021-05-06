"use strict";

var mongoose = require("mongoose"),
  Person = mongoose.model("Person");
const { query } = require("express");
var bmiHelper = require("./../bmi");

exports.calculateBmi = function (req, res) {
  try {
    var userparams = req.body;
    const { HeightCm, WeightKg } = req.body;
    var results = [];

    var i;
    for (i = 0; i < userparams.length; i++) {
      var height = userparams[i]["HeightCm"];
      var weight = userparams[i]["WeightKg"];
      var bmi = bmiHelper.formulaBmi(height, weight);
      var category = bmiHelper.bmiCategoryHealthRisk(bmi);

      results.push({
        gender: userparams[i]["Gender"],
        heightCm: userparams[i]["HeightCm"],
        weightKg: userparams[i]["WeightKg"],
        bmi: bmi,
        bmicategory: category["bmiCategory"],
        healthrisk: category["healthRisk"],
      });
    }
    Person.insertMany(results)
      .then(function () {
        console.log("Data inserted"); // Success
      })
      .catch(function (error) {
        console.log(error); // Failure
      });
  } catch (error) {
    console.log(error);
  }
  res.json({ status: "ok" });
};

exports.countOverWeight = async function (req, res) {
  var result = await Person.find({
    bmi: {
      $gte: 25,
      $lte: 29.9,
    },
  });

  console.log(result.length);

  return res.json({ countOfOverweightPersons: result.length });
};
