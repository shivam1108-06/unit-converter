const category = document.getElementById("category");

const fromUnit = document.getElementById("fromUnit");

const toUnit = document.getElementById("toUnit");

const inputValue = document.getElementById("inputValue");

const result = document.getElementById("result");

const lengthUnits = [
  "meter",
  "kilometer",
  "foot",
  "inch",
  "mile"
];

function populateUnits(){

fromUnit.innerHTML="";

toUnit.innerHTML="";

lengthUnits.forEach(unit=>{

const option1=document.createElement("option");

option1.value=unit;

option1.textContent=unit;

fromUnit.appendChild(option1);

const option2=document.createElement("option");

option2.value=unit;

option2.textContent=unit;

toUnit.appendChild(option2);

});

}

function updateResult(){

const from=fromUnit.value;

const to=toUnit.value;

if (inputValue.value === "") {
    result.textContent = "0";
    return;
}

const value = Number(inputValue.value);

const converted=convertLength(value,from,to);

result.textContent=converted;

}

inputValue.addEventListener("input",updateResult);

fromUnit.addEventListener("change",updateResult);

toUnit.addEventListener("change",updateResult);

populateUnits();

fromUnit.value="meter";
toUnit.value="kilometer";

updateResult();