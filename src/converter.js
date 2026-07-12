function convertLength(value, from, to) {
  if (from === "meter" && to === "kilometer") {
    return value / 1000;
  }

  if (from === "kilometer" && to === "meter") {
    return value * 1000;
  }

  if (from === "foot" && to === "inch") {
    return value * 12;
  }

  if (from === "inch" && to === "foot") {
    return value / 12;
  }

  if (from === "kilometer" && to === "mile") {
    return value * 0.621371;
  }

  if (from === "mile" && to === "kilometer") {
    return value * 1.609344;
  }
}

module.exports = {
  convertLength,
};
