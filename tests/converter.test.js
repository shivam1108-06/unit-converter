const { convertLength } = require("../src/converter");

test("1000 meters should convert to 1 kilometer", () => {
    expect(convertLength(1000, "meter", "kilometer")).toBe(1);
});