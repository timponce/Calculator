const calcDisplayTop = document.getElementById('calc-display-top');
const calcDisplayBottom = document.getElementById('calc-display-bottom');
const keysValue = document.querySelectorAll('[data-value]');
const keysType = document.querySelectorAll('[data-type]');
const clearKey = document.getElementById('clear');
const operators = {
    divide: '/',
    multiply: 'x',
    minus: '-',
    plus: '+',
}
const operatorValues = Object.values(operators);

function waitingForInput() {
    let min = 1,
      max = 3;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 1 - 3
    console.log('Wait for ' + rand + ' seconds');
    (rand > 2) ? 
    calcDisplayTop.textContent = 'HELL0 (◕‿◕✿)' :
    calcDisplayTop.textContent = 'HELL0 (◠‿◠✿)';
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
        } else if (keys.dataset.type == 'equals')
            operate();
    })
})

function storeOperator(value) {
    let top = calcDisplayTop.textContent;
    let bottom = calcDisplayBottom.textContent;
    if ((bottom != '') && (top == '')) {
        calcDisplayTop.textContent = bottom;
        calcDisplayTop.textContent += ' ' + operators[value] + ' ';
        calcDisplayBottom.textContent = '';
    //fix below. if there are number in top, this fails 
    } else if ((bottom == '') && (top != '')) {
            calcDisplayTop.textContent = top.substring(top.length-2, '') + operators[value] + ' ';
    } else if ((bottom != '') && (top != '')) {
        operate();
        calcDisplayBottom.textContent = '';
        calcDisplayTop.textContent += ' ' + operators[value] + ' ';
    }
};


function storeKeySelection(value) {
    if (calcDisplayTop.textContent.includes('HELL0')) {
        calcDisplayTop.textContent = '';
    } calcDisplayBottom.textContent += value;
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
        calcDisplayTop.textContent = 'ERROR (¤﹏¤)';
    } else {
    return a / b;
    }
};

// const changeSign = function(a,b) {
//     return 
// }

const percent = function(a,b) {
    return (a/100) * b;
};

const clear = function() {
    calcDisplayTop.textContent = '';
    calcDisplayBottom.textContent = '';
};

const operate = function() {
    let firstNumberAndOperator = calcDisplayTop.textContent;
    let operatorAndSpaces = firstNumberAndOperator.substring(firstNumberAndOperator.length-3);
    let operator = operatorAndSpaces.replace(/ /g, '');
    let firstNumber = firstNumberAndOperator.replace(operatorAndSpaces, '');
    let secondNumber = calcDisplayBottom.textContent;
    calcDisplayBottom.textContent = '';
    switch (operator) {
        case '/':
            calcDisplayTop.textContent = divide(firstNumber, secondNumber);
            break;
        case 'x':
            calcDisplayTop.textContent = multiply(firstNumber, secondNumber);
            break;
        case '-':
            calcDisplayTop.textContent = subtract(firstNumber, secondNumber);
            break;
        case '+':
            calcDisplayTop.textContent = add(firstNumber, secondNumber);
            break;
        default:
            console.log(operator);
    }
}