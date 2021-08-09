import { useState } from 'react'
import './styles/index.css'
import InputDisplay from '../inputDisplay/InputDisplay'
import KeyLayout from '../keyLayout/keyLayout'
// import modules
import * as Validate from './helper_modules/validate'
import * as myMath from './helper_modules/calc'

const Calculator = () => {
    /* STATES */
    const [displayValue, setDisplayValue] = useState('0');   // value displayed on the screen. 
    const [storedValue, setStoredValue] = useState('');     // previous value going to be participated in the operation 
    const [selectedOperator, setSelectedOperator] = useState(''); // current arithmetic operator to do calc.
    const [substractOperationCondition, setSubstractOperationCondition] = useState(false); // stores info about '-' whether it should be as operator or sign of negative number
    
    /* METHODS */
    // gets new entered value from key-layout and update display
    const updateDisplay = (value) => {
        console.log(substractOperationCondition);
        if(value === 'ce') {
            // shorten for 1 numeric letter and update this state 
            const shortedValue = displayValue.slice(0, displayValue.length - 1);
            setDisplayValue(shortedValue);
        } else {
            // validate number value and return new value
            const newValue = Validate.validateNumberValue(displayValue, value);
            setDisplayValue(newValue); 
            setSubstractOperationCondition(true);
        }
        
    }
    // reset all values 
    const clearAll = () => {
        setDisplayValue('0');
        setSelectedOperator('');
        setStoredValue('');
        setSubstractOperationCondition(false);
    }

    // set arithmetic operator to selectedOperator state
    const setOperator = (operator) => {
        console.log(substractOperationCondition);
        // set operator only after selecting number
        if(displayValue || storedValue) {
            // validate operator
            if(Validate.validateOperator(operator)) {
                setSelectedOperator(operator);
                // if displayValue zero than we only change operator value 
                if(displayValue !== '0') {
                    // in order to display operator on the screen
                    setStoredValue(displayValue); // store displayed value in temp storage
                    setDisplayValue('0'); // set display as 0 to wait for next number
                    setSubstractOperationCondition(false);
                }
            }
        }

        if(storedValue && displayValue && operator === '=') {
            calculate();
        }
    }

    // calculate result value
    const calculate = () => {
        const firstNumber = parseFloat(storedValue);
        const secondNumber = parseFloat(displayValue);

        const resultValue = myMath.calculate(firstNumber, secondNumber, selectedOperator);

        setStoredValue('0');
        setDisplayValue(resultValue);
    }
    
    return(
        <div className="calculator-container">
            <h1>{selectedOperator}</h1>
            <InputDisplay displayValue={displayValue}/>
            <KeyLayout updateDisplay={updateDisplay}
                       clearAll={clearAll}
                       setOperator={setOperator}
                       substractOperationCondition={substractOperationCondition}
            />
        </div>
    )
}

export default Calculator;