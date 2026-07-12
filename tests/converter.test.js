const { convertLength,convertWeight,convertTemperature,convertVolume,} = require("../src/converter");

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

test("1 kilometer should convert to 0.621371 miles", () => {
    expect(
        convertLength(1, "kilometer", "mile")
    ).toBeCloseTo(0.621371, 6);
});

test("1 mile should convert to 1.609344 kilometers", () => {
    expect(
        convertLength(1, "mile", "kilometer")
    ).toBeCloseTo(1.609344, 6);
});

test("1 kilogram should convert to 1000 grams", () => {
  expect(convertWeight(1, "kilogram", "gram")).toBe(1000);
});

test("1000 grams should convert to 1 kilogram", () => {
  expect(convertWeight(1000, "gram", "kilogram")).toBe(1);
});

test("1 kilogram should convert to 2.20462 pounds", () => {
  expect(
    convertWeight(1, "kilogram", "pound")
  ).toBeCloseTo(2.20462, 5);
});

test("1 pound should convert to 0.453592 kilograms", () => {
  expect(
    convertWeight(1, "pound", "kilogram")
  ).toBeCloseTo(0.453592, 6);
});

test("0 Celsius should convert to 32 Fahrenheit", () => {
  expect(
    convertTemperature(0, "celsius", "fahrenheit")
  ).toBeCloseTo(32, 2);
});

test("32 Fahrenheit should convert to 0 Celsius", () => {
  expect(
    convertTemperature(32, "fahrenheit", "celsius")
  ).toBeCloseTo(0, 2);
});

test("0 Celsius should convert to 273.15 Kelvin", () => {
  expect(
    convertTemperature(0, "celsius", "kelvin")
  ).toBeCloseTo(273.15, 2);
});

test("273.15 Kelvin should convert to 0 Celsius", () => {
  expect(
    convertTemperature(273.15, "kelvin", "celsius")
  ).toBeCloseTo(0, 2);
});

test("1 liter should convert to 1000 milliliters", () => {
  expect(
    convertVolume(1, "liter", "milliliter")
  ).toBe(1000);
});

test("1000 milliliters should convert to 1 liter", () => {
  expect(
    convertVolume(1000, "milliliter", "liter")
  ).toBe(1);
});

test("1 liter should convert to 0.264172 gallons", () => {
  expect(
    convertVolume(1, "liter", "gallon")
  ).toBeCloseTo(0.264172, 6);
});

test("1 gallon should convert to 3.78541 liters", () => {
  expect(
    convertVolume(1, "gallon", "liter")
  ).toBeCloseTo(3.78541, 5);
});

test("1 liter should convert to 4.22675 cups", () => {
  expect(
    convertVolume(1, "liter", "cup")
  ).toBeCloseTo(4.22675, 5);
});

test("1 cup should convert to 0.236588 liters", () => {
  expect(
    convertVolume(1, "cup", "liter")
  ).toBeCloseTo(0.236588, 6);
});