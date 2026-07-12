const category = document.getElementById("category");
const fromUnit = document.getElementById("fromUnit");
const toUnit = document.getElementById("toUnit");
const inputValue = document.getElementById("inputValue");
const result = document.getElementById("result");

const units = {
  length: ["meter", "kilometer", "foot", "inch", "mile"],

  weight: ["kilogram", "gram", "pound"],

  temperature: ["celsius", "fahrenheit", "kelvin"],

  volume: ["liter", "milliliter", "gallon", "cup"],
};

function populateUnits() {
  const selectedCategory = category.value;

  fromUnit.innerHTML = "";
  toUnit.innerHTML = "";

  units[selectedCategory].forEach((unit) => {
    const option1 = document.createElement("option");
    option1.value = unit;
    option1.textContent = unit;
    fromUnit.appendChild(option1);

    const option2 = document.createElement("option");
    option2.value = unit;
    option2.textContent = unit;
    toUnit.appendChild(option2);
  });

  fromUnit.selectedIndex = 0;
  toUnit.selectedIndex = 1;

  updateResult();
}

function updateResult() {
  if (inputValue.value === "") {
    result.textContent = "0";
    return;
  }

  const value = Number(inputValue.value);
  const from = fromUnit.value;
  const to = toUnit.value;

  // Same unit selected
  if (from === to) {
    result.textContent = value;
    return;
  }

  let converted;

  try {
    switch (category.value) {
      case "length":
        converted = convertLength(value, from, to);
        break;

      case "weight":
        converted = convertWeight(value, from, to);
        break;

      case "temperature":
        converted = convertTemperature(value, from, to);
        break;

      case "volume":
        converted = convertVolume(value, from, to);
        break;

      default:
        result.textContent = "Invalid Category";
        return;
    }

    result.textContent = converted;
  } catch (error) {
    result.textContent = error.message;
  }
}

// Event Listeners
inputValue.addEventListener("input", updateResult);
fromUnit.addEventListener("change", updateResult);
toUnit.addEventListener("change", updateResult);
category.addEventListener("change", populateUnits);

// Initialize
populateUnits();