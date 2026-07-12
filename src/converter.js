const conversionFactors = {
  "meter-kilometer": 0.001,
  "kilometer-meter": 1000,

  "foot-inch": 12,
  "inch-foot": 1 / 12,

  "kilometer-mile": 0.621371,
  "mile-kilometer": 1.609344,
};

function convertLength(value, from, to) {
  const key = `${from}-${to}`;

  if (!(key in conversionFactors)) {
     throw new Error("Length conversion not supported");
}

  return value * conversionFactors[key];
}

const weightConversionFactors = {
  "kilogram-gram": 1000,
  "gram-kilogram": 0.001,

  "kilogram-pound": 2.20462,
  "pound-kilogram": 0.453592,
};

function convertWeight(value, from, to) {
  const key = `${from}-${to}`;

  if (!(key in weightConversionFactors)) {
    throw new Error("Weight conversion not supported");
  }

  return value * weightConversionFactors[key];
}

function convertTemperature(value, from, to) {

  if (from === "celsius" && to === "fahrenheit") {
    return (value * 9) / 5 + 32;
  }

  if (from === "fahrenheit" && to === "celsius") {
    return ((value - 32) * 5) / 9;
  }

  if (from === "celsius" && to === "kelvin") {
    return value + 273.15;
  }

  if (from === "kelvin" && to === "celsius") {
    return value - 273.15;
  }

  throw new Error("Temperature conversion not supported");
}

const volumeConversionFactors = {
  "liter-milliliter": 1000,
  "milliliter-liter": 0.001,

  "liter-gallon": 0.264172,
  "gallon-liter": 3.78541,

  "liter-cup": 4.22675,
  "cup-liter": 0.236588,
};

function convertVolume(value, from, to) {
  const key = `${from}-${to}`;

  if (!(key in volumeConversionFactors)) {
    throw new Error("Volume conversion not supported");
  }

  return value * volumeConversionFactors[key];
}

module.exports = {
  convertLength,
  convertWeight,
  convertTemperature,
  convertVolume,
};