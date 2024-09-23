/**
 * Console calculator
 */
var currentInput = '';
var previousInput = '';
var currentOperation = '';
var result = '';

//buttons
function input(number) {
    if (document.getElementById("display").value === "Error") {
        clearCalculator();
    }

    if (number === '.' && currentInput.includes('.')) {
        console.error("Multiple decimal points!");
        document.getElementById("display").value = "Error";
        return;
    }

    if (result != '' && previousInput != '' && currentInput != '') {
        previousInput = '';
        previousInput += number;

        document.getElementById("display").value = previousInput;
    }
    else {
        if (!isNaN(number) || number === '.') {
            currentInput += number;
            // console.log(currentInput);
        }
        else {
            console.error("Invalid value!");
            document.getElementById("display").value = "Error";
            return;
        }

        document.getElementById("display").value = currentInput;
    }
}

//operators buttons
function operator(operator) {
    currentOperation = operator;

    const allowedOperators = ['add', 'substract', 'multiply', 'divide', 'power', 'squareroot'];
        if (!allowedOperators.includes(operator)) {
        console.error("Invalid operator!");
        document.getElementById("display").value = "Error";
        return;
    }
    
    if (result === '' && previousInput === '') {
        previousInput = currentInput;
    }
    
    if (currentInput !== '' && operator === 'squareroot') {
        calculate();
    }
    
    currentInput = '';
    
    if (currentOperation === 'substract' && currentInput === '' && previousInput === '') {
        currentInput = '-'
        document.getElementById("display").value = currentInput;
    }

    // console.log("previous" + " " + previousInput);
    // console.log("current" + " " + currentInput);
    // console.log("operator" + " " + currentOperation);
}

//clear
function clearCalculator() {
    currentInput = '';
    previousInput = '';
    currentOperation = '';
    result = '';
    console.clear();
    document.getElementById("display").value = 0;
}

//calculate
function calculate() {
    if (previousInput === '' && currentInput === '') {
        document.getElementById("display").value = 0;
        return;
    }

    if (currentOperation === '') {
        result = currentInput;
    }
    
    if (currentInput === '' && currentOperation !== 'squareroot') {
        currentInput = previousInput;
    }

    if (previousInput === '' && currentInput !== '') {
        previousInput = 0;
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
            document.getElementById("display").value = "Error";
            return;
        }
    }
    else if (currentOperation === 'power') {
        result = parseFloat(previousInput) ** parseFloat(currentInput);
    }
    else if (currentOperation === 'squareroot') {
        if (parseFloat(previousInput) < 0) {
            console.error("Cannot calculate square root of a negative number!");
            document.getElementById("display").value = "Error";
            return;
        }
        result = Math.sqrt(previousInput);
    }

    // console.log("result" + " " + result);

    previousInput = result;

    // console.log("previousInput" + " " + previousInput);
    // console.log("currentInput" + " " + currentInput);

    document.getElementById("display").value = result;
}