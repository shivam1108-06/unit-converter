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
}

module.exports = {
  convertLength,
};
