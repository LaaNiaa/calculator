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
    currentOperation = operator;
    
    if (result === '' && previousInput === '') {
        previousInput = currentInput;
    }

    if (currentInput !== '' && operator === 'squareroot') {
        calculate();
    }

    currentInput = '';

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
    
    if (currentInput === '' && currentOperation !== 'squareroot') {
        currentInput = previousInput;
    }

    if (currentOperation === 'add') {
        result = parseFloat(previousInput) + parseFloat(currentInput);
    }
    else if (currentOperation === 'substract') {
        result = parseFloat(previousInput) - parseFloat(currentInput);
    }
    else if (currentOperation === 'multiply') {
        result = parseFloat(previousInput) * parseFloat(currentInput);
    }
    else if (currentOperation === 'divide') {
        if (parseFloat(currentInput) !== 0) {
            result = parseFloat(previousInput) / parseFloat(currentInput);
        } else {
            console.error("You can't divide by zero!");
            result = "Error";
        }
    }
    else if (currentOperation === 'power') {
        result = parseFloat(previousInput) ** parseFloat(currentInput);
    }
    else if (currentOperation === 'squareroot') {
        result = Math.sqrt(previousInput);
    }

    console.log("result" + " " + result);

    previousInput = result;

    console.log("previousInput" + " " + previousInput);
    console.log("currentInput" + " " + currentInput);
}