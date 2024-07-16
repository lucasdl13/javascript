// Seleciona a tela da calculadora onde o resultado é mostrado
const calculatorScreen = document.querySelector('#calculator-screen');

// Variáveis para armazenar o estado atual da calculadora
let currentInput = '';
let previousInput = '';
let operator = '';

// Atualiza a tela da calculadora com o valor atual
function updateScreen() {
    calculatorScreen.value = currentInput;
}

// Lida com a entrada dos números e do ponto decimal
function inputNumber(number) {
    if (currentInput.includes('.') && number === '.') return;
    currentInput = currentInput.toString() + number.toString();
}

// Lida com a entrada dos operadores
function handleOperator(nextOperator) {
    if (currentInput === '') return;
    if (previousInput !== '') {
        calculate();
    }
    operator = nextOperator;
    previousInput = currentInput;
    currentInput = '';
}

// Realiza o cálculo com base nos valores armazenados e no operador
function calculate() {
    let result = '';
    const prev = parseFloat(previousInput);
    const current = parseFloat(currentInput);
    if (isNaN(prev) || isNaN(current)) return;
    switch (operator) {
        case '+':
            result = prev + current;
            break;
        case '-':
            result = prev - current;
            break;
        case '*':
            result = prev * current;
            break;
        case '/':
            result = prev / current;
            break;
        default:
            return;
    }
    currentInput = result;
    operator = '';
    previousInput = '';
}

// Reseta a calculadora
function resetCalculator() {
    currentInput = '';
    previousInput = '';
    operator = '';
}

// Adiciona eventos para os botões
document.querySelector('.calculator-keys').addEventListener('click', (event) => {
    const { target } = event;
    const { value } = target;

    if (!target.matches('button')) return;

    switch (value) {
        case '+':
        case '-':
        case '*':
        case '/':
            handleOperator(value);
            break;
        case '=':
            calculate();
            break;
        case 'all-clear':
            resetCalculator();
            break;
        case '.':
            inputNumber(value);
            break;
        default:
            if (Number.isInteger(parseFloat(value))) {
                inputNumber(value);
            }
    }
    updateScreen();
});
