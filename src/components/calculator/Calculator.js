import { useState } from 'react'
import InputDisplay from '../inputDisplay/InputDisplay'
import './styles/index.css'
import KeyLayout from '../keyLayout/keyLayout'

const Calculator = () => {
    /* INIT STATE */
    // stores number values for input layout
    const [numberValues] = useState([
        '1','2','3','4','5','6','7','8','9','0','.','ce'
    ]);
    // displayValue stores the number displayed on the input screen
    const [displayValue, setDisplayValue] = useState('0');
    // describes arithmetic operator which is gonna be processed
    const [operators] = useState([
        '+','-','x','/','='
    ]);
    const [selectedOperator, setSelectedOperator] = useState('');
    // stores old value of number operations
    const [storedValue, setStoredValue] = useState('0'); 

    /* DEFINE PROCESS HANDLING FUNCTIONS */
    
    const processCalculation = () => {
        if(selectedOperator) {
            // parse number values from string to float type
            let floatDisplayValue = parseFloat(displayValue);
            let floatStoredValue = parseFloat(storedValue); // this value is stored, but never displayed
            let resultValue = 0
    
            if(selectedOperator === '+') {
                // do sum
                resultValue = floatDisplayValue + floatStoredValue;
            } else if(selectedOperator === '-') {
                // do substraction
                resultValue = floatStoredValue - floatDisplayValue;
            } else if(selectedOperator === 'x') {
                // do multiplication
                resultValue = floatStoredValue * floatDisplayValue;
            } else if(selectedOperator === '/') {
                // do division
                resultValue = floatStoredValue / floatDisplayValue;
            }
            
            resultValue = resultValue.toString(); // convert float to string type
            setSelectedOperator(''); // reset arithmetic operator value

            // display our result value into the screen
            setDisplayValue(resultValue);
        }
    }   


    // value is given in String data type
    const updateDisplay = (value) => {
        if(value === '.' && displayValue.includes('.')){
                // ignore second point for float values
                value = '';
        }

        if(value === "ce") {
            const shortedValue = displayValue.substring(0, displayValue.length- 1);
            
            if(shortedValue.length < 1) {
                setDisplayValue('0');
            } else {
                setDisplayValue(shortedValue);
            }
        } else {
            // else case means that value now is only numbers
            if(displayValue === '0') {
                setDisplayValue(value);
            } else {
                setDisplayValue(displayValue + value);
            }
        }
    }
    
    const setOperator = (value) => {
        if(operators.includes(value)) {
            if(value !== '=') {
                setStoredValue(displayValue);
                setDisplayValue('0');
                setSelectedOperator(value);
            } else {
                processCalculation();
            }
        }
    }

    const clearDisplay = () => {
        setDisplayValue('0');
        setStoredValue('0');
    }

    return(
        <div className="calculator-container">
            <InputDisplay displayValue={displayValue}/>
            <KeyLayout 
                clearDisplay={clearDisplay}
                operators={operators}
                numbers={numberValues}
                setOperator={setOperator}
                updateDisplayForNumbers={updateDisplay}
                processCalculation={processCalculation}
            />
        </div>
    )
}

export default Calculator;