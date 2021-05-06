exports.formulaBmi = function (height_in_cm, weight) {
  var height = height_in_cm / 100;
  return weight / (height * height);
};

exports.bmiCategoryHealthRisk = function (bmi) {
  const bmiCategory = "bmiCategory";
  const healthRisk = "healthRisk";
  var bmiFloat = parseFloat(bmi);
  console.log(bmi);
  if (bmiFloat <= 18.4) {
    return {
      [bmiCategory]: "Underweight",
      [healthRisk]: "Malnutrition risk",
    };
  } else if (bmiFloat >= 18.5 && bmiFloat <= 24.9) {
    return {
      [bmiCategory]: "Normal weight",
      [healthRisk]: "Low risk",
    };
  } else if (bmiFloat >= 25 && bmiFloat <= 29.9) {
    return {
      [bmiCategory]: "Overweight",
      [healthRisk]: "Enhanced risk",
    };
  } else if (bmiFloat >= 30 && bmiFloat <= 34.9) {
    return {
      [bmiCategory]: "Moderately obese",
      [healthRisk]: "Medium risk",
    };
  } else if (bmiFloat >= 35 && bmiFloat <= 39.9) {
    return {
      [bmiCategory]: "Severely obese",
      [healthRisk]: "High risk",
    };
  } else {
    return {
      [bmiCategory]: "Very severely obese",
      [healthRisk]: "Very high risk",
    };
  }
};
