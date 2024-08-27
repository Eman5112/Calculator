let num2 = '';
let num1 = '';
let op = null;
function number(num) {
    if (num2.includes('.') && num === '.') return;
    num2 += num;
    updateDisplay();
}

function updateDisplay() {
    if(num2===''){
        document.getElementById('display').innerText = '0' ;
    }
    else{
    document.getElementById('display').innerText = num2 ;
    }
}

function clearDisplay() {
    num1 = '';
    num2 = '';
    op = null;
    updateDisplay();
}

function setOperation(opp) {
    if (num2 === '') return;
    if (num1 !== '') {
        calculate();
    }
    op = opp;
    num1 = num2;
    num2 = '';
}

function calculate() {
    let result;
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) return;

    switch (op) {
        case '+':
            result = n1 + n2;
            break;
        case '-':
            result = n1 - n2;
            break;
        case '*':
            result = n1 * n2;
            break;
        case '/':
            result = n1 / n2;
            break;
        case '%':
            result = n1 % n2;
        break;
        default:
            return;
    }

    num2 = result;
    op = null;
    num1 = '';
    updateDisplay();
}