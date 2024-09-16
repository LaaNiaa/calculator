var res;
var res1;

function input(val) {
    res = document.getElementById("result");
    console.log(res.value);

    switch (true) {
        case res.value.startsWith("0") && val === ',':
            res.value += val;
            break;
        
        case res.value.startsWith("0,"):
            res.value += val;
            break;
        
        case res.value.startsWith("0"):
            res.value = '';
            res.value += val;
            break;
        
        default:
            res.value += val;
            break;
    }
}

function ac() {
    document.getElementById("result").value = '0';
}

function operator(op) {
    res = document.getElementById("result").value;
    res1 = document.getElementById("result").value;
     
    switch (true) {
        case op === 'add':
            input;
            document.getElementById("result").value = '';
            res = parseFloat(res) + parseFloat(res1);
            
            break;
    }
}

function calculate() {
    operator('add')
    console.log(res);
}

/**
 * type first number -> after clicking math operator change button color to white,
 * but the first number stays on result display -> after typing next number clear and save in memory the first number,
 * the operator button goes back to orange color -> after clicking equals display the result
 */

/**
 * add button working in console, but have bugs !!!!!!!!!!!!
 */