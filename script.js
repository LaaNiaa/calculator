function input(val) {
    let res = document.getElementById("result");

    if (res.value.startsWith("0") && val === ',') {
        res.value += val;
    }
    else if (res.value.startsWith("0,")) {
        res.value += val;
    }
    else if (res.value.startsWith("0")) {
        res.value = '';
        res.value += val;
    }
    else {
        res.value += val;
    }
}

function ac() {
    document.getElementById("result").value = '0';
}