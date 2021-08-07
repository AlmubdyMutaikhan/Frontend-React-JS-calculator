import { useState } from 'react'
import InputDisplay from '../inputDisplay/InputDisplay'
import './styles/index.css'
import KeyLayout from '../keyLayout/keyLayout'

const Calculator = () => {
    /* INIT STATE */
    // displayValue stores the number displayed on the input screen
    const [displayValue, setDisplayValue] = useState('0');
    // describes which operator is currently chosen
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
                if(selectedOperator) {
                    setStoredValue(displayValue);
                    setDisplayValue(value);
                } else {
                    setDisplayValue(displayValue + value);
                }
            }
        }
    }
    
    const setOperator = (operatorValue) => {
            if(operatorValue !== '=') {
                // if there is already stored value and user wants do next operation immediately
                if(storedValue && selectedOperator) {
                    processCalculation();
                    setStoredValue('');
                    setSelectedOperator(operatorValue);
                } else {
                    setStoredValue(displayValue);
                    setDisplayValue('0');
                    setSelectedOperator(operatorValue);
                }
            } else {
                processCalculation();
            }
    }

    const clearDisplay = () => {
        setDisplayValue('0');
        setStoredValue('0');
        setSelectedOperator('');
    }

    return(
        <div className="calculator-container">
            <InputDisplay displayValue={displayValue}/>
            <KeyLayout 
                clearDisplay={clearDisplay}
                setOperator={setOperator}
                updateDisplayForNumbers={updateDisplay}
                processCalculation={processCalculation}
            />
        </div>
    )
}

export default Calculator;