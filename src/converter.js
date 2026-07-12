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

  if (!conversionFactors[key]) {
    throw new Error("Conversion not supported");
  }

  return value * conversionFactors[key];
}

module.exports = {
  convertLength,
};