const displaySign = document.getElementById('calc-display-top-sign')
const displayResult = document.getElementById('calc-display-top-number')
const displayOperator = document.getElementById('calc-display-top-operator')
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

function waitingForInput() {
    let min = 1,
      max = 3;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 1 - 3
    console.log('Wait for ' + rand + ' seconds');
    (rand > 2) ? 
    displayResult.textContent = 'HELL0 (◕‿◕✿)' :
    displayResult.textContent = 'HELL0 (◠‿◠✿)';
    setTimeout(waitingForInput, rand * 1000);
  };

// waitingForInput();
// Need function to clear this and stop this when a button is pressed. And then to reinitiate after being left alone for x seconds


keysType.forEach(keys => {
    keys.addEventListener('click', e => {
        const pressedKeyValue = keys.dataset.value;
        const pressedKeyType = keys.dataset.type;
        if (keys.dataset.type == 'operator') {
            storeOperator(pressedKeyValue);
        } else if (keys.dataset.type == 'number') {
            storeKeySelection(pressedKeyValue)
        } else if (keys.dataset.type == 'clear') {
            clear();
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
        displayResult.textContent = '';
        storeOperator(value)
        console.log(value);
    }
    else if ((bottom == '') && (top == '')) {
        displayOperator.textContent = '';
        console.log('a');
    }
    else if ((bottom != '') && (top == '')) {
        displayResult.textContent = bottom;
        displayOperator.textContent += operators[value];
        displayBottom.textContent = '';
        console.log('b');
    //fix below. if there are number in top, this fails 
    } else if ((bottom == '') && (top != '')) {
            displayOperator.textContent = operators[value];
            console.log('c');
    } else if ((bottom != '') && (top != '')) {
        operate();
        displayBottom.textContent = '';
        displayOperator.textContent += operators[value];
        console.log('d');
    }
};


function storeKeySelection(value) {
    if (displayResult.textContent.includes('HELL0')) {
        displayResult.textContent = '';
    } displayBottom.textContent += value;
}

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
    if (b == 0) {
        displayResult.textContent = 'ERROR (¤﹏¤)';
    } else {
    return a / b;
    }
};

const percent = function(a,b) {
    return (b/100) * a;
};

const changeSign = function(sign) {
    displaySign.textContent == '' ? displaySign.textContent = '-' :
    displaySign.textContent == '-' ? displaySign.textContent = '+' :
    displaySign.textContent == '+'? displaySign.textContent = '-' :
    displaySign.textContent = 'error';
}

const clear = function() {
    displaySign.textContent = '';
    displayResult.textContent = '';
    displayOperator.textContent = '';
    displayBottom.textContent = '';
};

const operate = function() {
    let firstNumber = displayResult.textContent;
    let operator = displayOperator.textContent;
    let secondNumber = displayBottom.textContent;
    clear();
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