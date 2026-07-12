const { convertLength } = require("../src/converter");

test("1000 meters should convert to 1 kilometer", () => {
    expect(convertLength(1000, "meter", "kilometer")).toBe(1);
});

test("1 kilometer should convert to 1000 meters", () => {
  expect(convertLength(1, "kilometer", "meter")).toBe(1000);
});

test("1 foot should convert to 12 inches", () => {
  expect(convertLength(1, "foot", "inch")).toBe(12);
});

test("12 inches should convert to 1 foot", () => {
  expect(convertLength(12, "inch", "foot")).toBe(1);
});