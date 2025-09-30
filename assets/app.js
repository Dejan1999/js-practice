const defaultResult = 0;
let currentResult = defaultResult;
let logOfOperations = [];

// dobavljanje vrednosti iz input polja
function getUserNumberInput() {
    return parseInt(userInput.value);
}

// funkcija za kreiranje loga kalkulacije
function writeOutput(operator, resultBeforCalculation, calculationNumber) {
    const calculationDescription = `${resultBeforCalculation} ${operator} ${calculationNumber}`; // 5 * 10
    outputResult(currentResult, calculationDescription);
}

// funkcija koja zapisuje svaki log u formatu: 'MULTIPLY', 'initialResult', 'enteredNumber', 'currentResult'
function writeToLog(typeOfOperation, initialResult, enteredNumber, currentResult) {
    const logEntry = {
        operation: typeOfOperation,
        initialResult: initialResult,
        enteredNumber: enteredNumber,
        currentResult: currentResult
    }
    logOfOperations.push(logEntry);
    console.log(logOfOperations);
}

function multiply() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    // ? duzi nacin
    // currentResult = currentResult * enteredNumber;
    // ? kraci nacin
    currentResult *= enteredNumber;
    writeOutput('*', initialResult, enteredNumber);
    writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult)
}


function divide() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult /= enteredNumber;
    writeOutput('/', initialResult, enteredNumber);
    writeToLog('DIVIDE', initialResult, enteredNumber, currentResult)
}

function add() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult += enteredNumber;
    writeOutput('+', initialResult, enteredNumber);
    writeToLog('ADD', initialResult, enteredNumber, currentResult)
}

function subtract() {
    const enteredNumber = getUserNumberInput();
    const initialResult = currentResult;
    currentResult * enteredNumber;
    currentResult -= enteredNumber;
    writeOutput('-', initialResult, enteredNumber);
    writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult)
}

function clear() {
  currentResult = 0;
  userInput.value = 0;
  logOfOperations = [];
}

multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
clearBtn.addEventListener('click', clear);

