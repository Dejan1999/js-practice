// vendor.js -> ovo je neka njacesca konvencija po imenovanju fajlova koji ukljucju is third package biblioteka

const userInput = document.getElementById('input-number');
const multiplyBtn = document.getElementById('btn-multiply');
const divideBtn = document.getElementById('btn-divide');
const addBtn = document.getElementById('btn-add');
const subtractBtn = document.getElementById('btn-subtract');
const clearBtn = document.getElementById('btn-clear');


const currentCalculationOutput = document.getElementById('current-calculation');
const currentCalculationResult = document.getElementById('current-result');

function outputResult (result, text) {
    currentCalculationOutput.textContent = text;
    currentCalculationResult.textContent = result;
}