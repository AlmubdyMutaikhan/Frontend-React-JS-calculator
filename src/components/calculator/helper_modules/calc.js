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
    }

    return resultValue;
}


const substract = (firstNumber, secondNumber) => {
    const value = (firstNumber - secondNumber).toString();
    
    return value === "NaN" || value === "Infinity" ? "Math Arithmetic Error" : value; 
}

const sum = (firstNumber, secondNumber) => {
    const value = (firstNumber + secondNumber).toString();
    return value === "NaN" || value === "Infinity" ? "Math Arithmetic Error" : value; 
}

const divide = (firstNumber, secondNumber) => {
    const value = (firstNumber / secondNumber).toString();
    return value === "NaN" || value === "Infinity" ? "Math Arithmetic Error" : value; 
}

const multiply = (firstNumber, secondNumber) => {
    const value = (firstNumber * secondNumber).toString();
    return value === "NaN" || value === "Infinity" ? "Math Arithmetic Error" : value; 
}

export {
    calculate
}