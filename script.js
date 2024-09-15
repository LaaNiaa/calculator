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