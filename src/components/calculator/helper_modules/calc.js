/* Functions to do calculations */
const calculate = (firstNumber, secondNumber, operator) => {
    let resultValue = 0;
    if(operator) {
        if(operator === '-') {
            // substract
            resultValue = substract(firstNumber, secondNumber);
        } else if(operator === 'x') {
            // multiply
            resultValue = multiply(firstNumber, secondNumber);
        } else if(operator === '/') {
            // divide 
            resultValue = divide(firstNumber, secondNumber);
        } else if(operator === '+') {
            // sum :D
            resultValue = sum(firstNumber, secondNumber);
        }
        resultValue = resultValue.toString();
    }

    return resultValue.includes('NaN') || resultValue.includes('Infinity') ? "Math Arithmetic Error" : resultValue; 
}


const substract = (firstNumber, secondNumber) => {
    return firstNumber - secondNumber;
}

const sum = (firstNumber, secondNumber) => {
    return firstNumber + secondNumber;
}

const divide = (firstNumber, secondNumber) => {
    return firstNumber / secondNumber;
}

const multiply = (firstNumber, secondNumber) => {
    return firstNumber * secondNumber;
}

export {
    calculate
}