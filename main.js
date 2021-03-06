const displayResult = document.getElementById('calc-display-top-number');
const displayOperator = document.getElementById('calc-display-top-operator');
const displayBottom = document.getElementById('calc-display-bottom');
const keysValue = document.querySelectorAll('[data-value]');
const keysType = document.querySelectorAll('[data-type]');
const clearKey = document.getElementById('clear');
const operators = {
    divide: '/',
    multiply: 'x',
    minus: '-',
    plus: '+',
    percent: '%',
}
const operatorValues = Object.values(operators);

keysType.forEach(keys => {
    keys.addEventListener('click', e => {
        const pressedKeyValue = keys.dataset.value;
        const pressedKeyType = keys.dataset.type;
        if (keys.dataset.type == 'operator') {
            storeOperator(pressedKeyValue);
        } else if (keys.dataset.type == 'number') {
            storeKeySelection(pressedKeyValue)
        } else if (keys.dataset.type == 'decimal') {
            storeDecimal(pressedKeyValue);
        } else if (keys.dataset.type == 'clear') {
            clearAll();
        } else if (keys.dataset.type == 'equals') {
            operate();
        } else if (keys.dataset.type == 'change-sign') {
            changeSign();
        }
    })
})

function storeOperator(value) {
    let top = displayResult.textContent;
    let bottom = displayBottom.textContent;
    if (top.includes('HELL0')) {
    }
    else if ((bottom == '') && (top == '')) {
        displayOperator.textContent = '';
        console.log('a');
    }
    else if ((bottom != '') && (top == '')) {
        clearAll();
        displayResult.textContent = bottom;
        displayOperator.textContent += operators[value];
        console.log('b');
    } else if ((bottom == '') && (top.match(/[0-9]/) )) {
            displayOperator.textContent = operators[value];
            console.log('c');
    } else if ((bottom != '') && (top.match(/[0-9]/))) {
        operate();
        displayOperator.textContent += operators[value];
        console.log('d');
    }
};

function storeKeySelection(value) {
    if (displayResult.textContent.includes('HELL0')) {
        clearAll();
        displayBottom.textContent += value;
    } else if (displayBottom.textContent.length < 16) {
        displayBottom.textContent += value;
    }
}

function storeDecimal(value) {
    if ((displayBottom.textContent != '') && !(displayBottom.textContent.includes('.'))) {
        displayBottom.textContent += '.';
    }
};

const add = function(a,b) {
    return +a + +b;
};

const subtract = function(a,b) {
    return a - b;
};

const multiply = function(a,b) {
    return a * b;
};

const divide = function(a,b) {
    if (b == '0') {
        return 'ERROR (???????)';
    } else {
    return a / b;
    }
};

const percent = function(a,b) {
    return (b/100) * a;
};

const changeSign = function(sign) {
    if (displayBottom.textContent != '') {
        displayBottom.textContent.includes('-') ? displayBottom.textContent = displayBottom.textContent.substring(1) :
        displayBottom.textContent = '-' + displayBottom.textContent;
    }
}

const clearAll = function() {
    displayResult.textContent = '';
    displayOperator.textContent = '';
    displayBottom.textContent = '';
};

const round = function() {

}

const operate = function() {
    let firstNumber = displayResult.textContent;
    let operator = displayOperator.textContent;
    let secondNumber = displayBottom.textContent;
    clearAll();
    switch (operator) {
        case '/':
            displayResult.textContent = divide(firstNumber, secondNumber);
            break;
        case 'x':
            displayResult.textContent = multiply(firstNumber, secondNumber);
            break;
        case '-':
            displayResult.textContent = subtract(firstNumber, secondNumber);
            break;
        case '+':
            displayResult.textContent = add(firstNumber, secondNumber);
            break;
        case '%':
            displayResult.textContent = percent(firstNumber, secondNumber);
            break;
        default:
    }
}