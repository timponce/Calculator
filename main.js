const calcDisplayTop = document.getElementById('calc-display-top');
const keys = document.querySelectorAll('[data-value]');
const clearKey = document.getElementById('clear');
const operators = {
    divide: '/',
    multiply: 'x',
    minus: '-',
    plus: '+',
}

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



keys.forEach(keys => {
    keys.addEventListener('click', e => {
        const pressedKey = keys.dataset.value
        storeKeySelection(pressedKey)
    })
})

function storeKeySelection(value) {
    console.log(value)
    if (calcDisplayTop.textContent.includes('HELL0')) {
        calcDisplayTop.textContent = '';
    }
    if (value >= 0 && value <= 9) {
        calcDisplayTop.textContent += value;
    } else if (value === 'equals') {
        calcDisplayTop.textContent += '=';
        operate();
    } else if (value === 'fun') {
        calcDisplayTop.textContent = '5318008';
        setTimeout(clear, 1500);
    } else if (value === 'decimal') {
        console.log('will figure out decimal later')
    } else if (value === 'clear') {
        clear();
    } else {
        storeFirstNumAndOperator();
        calcDisplayTop.textContent += operators[value];
    }
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
    console.log('cleared display');
};

const storeFirstNumAndOperator = function() {
    console.log('storefirst working')
}

const operate = function() {

}