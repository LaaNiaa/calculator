/**
 * Console calculator
 */
var currentInput = '';
var previousInput = '';
var currentOperation = '';
var result = '';

//buttons
function input(number) {
    if (!isNaN(number) || number === '.') {
        currentInput += number;
        console.log(currentInput);
    } else {
        console.error("Invalid value!");
    }
}

//operators buttons
function operator(operator) {
    if (result === '' && previousInput === '') {
        previousInput = currentInput;
    }
    currentInput = '';
    currentOperation = operator;

    console.log("previous" + " " + previousInput);
    console.log("current" + " " + currentInput);
    console.log("operator" + " " + currentOperation);
}

//clear
function clearCalculator() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    result = '';
    console.clear();
}

//calculate
function calculate() {
    if (currentOperation === '') {
        result = currentInput;
    }
    
    if (currentInput === '') {
        currentInput = previousInput;
    }

    switch(true) {
        case currentOperation === 'add':
                result = parseFloat(previousInput) + parseFloat(currentInput);
        }

    console.log("result" + " " + result);

    previousInput = result;

    console.log("previousInput" + " " + previousInput);
    console.log("currentInput" + " " + currentInput);
}