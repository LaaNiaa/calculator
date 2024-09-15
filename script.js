function input(val) {
    let res = document.getElementById("result");

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

// function operator(op) {
//     let num1 = document.getElementById("result").value;
     
//     switch (true) {
//         case op === 'add':
//             console.log(num1);
//             input();
//             console.log(document.getElementById("result").value);
//             break;
//     }
// }

function calculate() {

}

/**
 * type first number -> after clicking math operator change button color to white,
 * but the first number stays on result display -> after typing next number clear and save in memory the first number,
 * the operator button goes back to orange color -> after clicking equals display the result
 */