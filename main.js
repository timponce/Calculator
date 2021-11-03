const calcDisplay = document.getElementById('calc-display');
const numberKeys = document.querySelectorAll('[data-value]')

function waitingForInput() {
    let min = 1,
      max = 3;
    let rand = Math.floor(Math.random() * (max - min + 1) + min); //Generate Random number between 1 - 3
    console.log('Wait for ' + rand + ' seconds');
    (rand > 2) ? 
    calcDisplay.textContent = 'HELL0 (◕‿◕✿)' :
    calcDisplay.textContent = 'HELL0 (◠‿◠✿)';
    setTimeout(waitingForInput, rand * 1000);
  };

// waitingForInput(); commenting out for now until all built
//Need function to clear this and stop this when a button is pressed. And then to reinitiate after being left alone for x seconds

numberKeys.forEach(numberKeys => {
    numberKeys.addEventListener('click', e => {
        const pressedKey = numberKeys.dataset.value
        storeKeySelection(pressedKey)
    })
})

function storeKeySelection(value) {
    console.log(value)
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
        calcDisplay.textContent = 'ERROR (¤﹏¤)';
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

// const clear = function() {

// };