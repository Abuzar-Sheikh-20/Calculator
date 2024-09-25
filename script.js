let memoryValue = 0;
let currentValue = '';
let operation = '';
let result = 0;

function clearEntry() {
    currentValue = '';
    updateDisplay('');
}

function memoryClear() {
    memoryValue = 0;
}

function memoryRecall() {
    currentValue = memoryValue.toString();
    if (currentValue === '143') {
        currentValue = "Sumaiya ❤️ Abuzar";
    }
    updateDisplay(currentValue);
}

function memoryAdd() {
    memoryValue += parseFloat(currentValue) || 0;
}

function memorySubtract() {
    memoryValue -= parseFloat(currentValue) || 0;
}

function performOperation(op) {
    if (currentValue === '' && result !== 0) {
        currentValue = result.toString();
    }

    if (operation !== '' && currentValue !== '') {
        calculate();
    } else {
        result = parseFloat(currentValue);
    }

    operation = op;
    updateDisplay(result.toString() + ' ' + operation);
    currentValue = '';
}

function calculate() {
    let num1 = result;
    let num2 = parseFloat(currentValue) || 0;

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '÷':
            result = num1 / num2;
            break;
        case '×':
            result = num1 * num2;
            break;
    }

    // if (result === 143) {
    //     result = 'Sumaiya ❤️ Abuzar';
    // }
    
    updateDisplay(result.toString());
    currentValue = result.toString();
    operation = '';
}

function calculateSquareRoot() {
    result = Math.sqrt(parseFloat(currentValue));
    updateDisplay(result.toString());
    currentValue = result.toString();
}

function calculatePercentage() {
    result = parseFloat(currentValue) / 100;
    updateDisplay(result.toString());
    currentValue = result.toString();
}

function reciprocal() {
    result = 1 / parseFloat(currentValue);
    updateDisplay(result.toString());
    currentValue = result.toString();
}

function changeSign() {
    currentValue = (parseFloat(currentValue) * -1).toString();
    updateDisplay(currentValue);
}

function updateDisplay(value) {
    document.querySelector('.resultArea').innerText = value;
}


document.querySelector('.button_CE').addEventListener('click', clearEntry);

document.querySelectorAll('button').forEach(button => {
    button.addEventListener('click', function () {
        const btnValue = this.innerHTML;

        switch (btnValue) {
            case 'MC':
                memoryClear();
                break;
            case 'MR':
                memoryRecall();
                break;
            case 'M+':
                memoryAdd();
                break;
            case 'M-':
                memorySubtract();
                break;
            case '+':
            case '-':
            case '÷':
            case '×':
                performOperation(btnValue);
                break;
            case '=':
                calculate();
                break;
            case '&radic;':
                calculateSquareRoot();
                break;
            case '&percnt;':
                calculatePercentage();
                break;
            case '1/x':
                reciprocal();
                break;
            case '+/-':
                changeSign();
                break;
            case 'CE':
                clearEntry();
                break;
            case '.':
                if (!currentValue.includes('.')) {
                    currentValue += '.';
                    updateDisplay(currentValue);
                }
                break;
            default:
                if (!isNaN(btnValue)) {
                    currentValue += btnValue;
                    updateDisplay(currentValue);
                }
                break;
        }
    });
});
