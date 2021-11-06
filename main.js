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

// waitingForInput(); commenting out for now until all built
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
        }
    })
})

function storeOperator(value) {
    if ((calcDisplayBottom.textContent != '') && 
    (calcDisplayTop.textContent == '')) {
        calcDisplayTop.textContent = calcDisplayBottom.textContent;
        calcDisplayTop.textContent += ' ' + operators[value] + ' ';
        calcDisplayBottom.textContent = '';
    } else if ((calcDisplayBottom.textContent == '') && 
    (calcDisplayTop.textContent != '')) {
            calcDisplayTop.textContent = calcDisplayTop.textContent.substring(calcDisplayTop.textContent.length-2, '') + operators[value] + ' ';
        }
};


function storeKeySelection(value) {
    if (calcDisplayTop.textContent.includes('HELL0')) {
        calcDisplayTop.textContent = '';
    } calcDisplayBottom.textContent += value;
}

const add = function(a,b) {
    return a + b;
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

}