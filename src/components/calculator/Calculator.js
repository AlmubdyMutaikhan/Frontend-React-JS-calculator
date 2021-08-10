import { useState } from 'react'
import './styles/index.css'
import InputDisplay from '../inputDisplay/InputDisplay'
import KeyLayout from '../keyLayout/keyLayout'
import History from '../history/History'

// import modules
import * as Validate from './helper_modules/validate'
import * as myMath from './helper_modules/calc'

const Calculator = () => {
    /* STATES */
    const [displayValue, setDisplayValue] = useState('0');   // value displayed on the screen. 
    const [storedValue, setStoredValue] = useState('');     // previous value going to be participated in the operation 
    const [selectedOperator, setSelectedOperator] = useState(''); // current arithmetic operator to do calc.
    const [substractOperationCondition, setSubstractOperationCondition] = useState(false); // stores info about '-' whether it should be as operator or sign of negative number
    const [recentOperation, setRecentOperation] = useState('');
   
    /* METHODS */
    // gets new entered value from key-layout and update display
    const updateDisplay = (value) => {
        if(value) {
            if(value === 'ce') {
                if(displayValue.length > 1) {
                    // shorten for 1 numeric letter and update this state 
                    const shortedValue = displayValue.slice(0, displayValue.length - 1);
                    setDisplayValue(shortedValue);
                }
                
            } else {
                if(!storedValue && selectedOperator && displayValue) {
                    setSubstractOperationCondition(false);
                    setStoredValue(displayValue);
                    setDisplayValue(value);
                } else {
                    // validate number value and return new value
                    const newValue = Validate.validateNumberValue(displayValue, value);
                    console.log(newValue);
                    setDisplayValue(newValue); 
                    setSubstractOperationCondition(true);
                }     
            }
        }
    }
    // reset all values 
    const clearAll = () => {
        setDisplayValue('0');
        setSelectedOperator('');
        setStoredValue('');
        setSubstractOperationCondition(false);
        setRecentOperation('');
    }

    // set arithmetic operator to selectedOperator state
    const setOperator = (operator) => {
        // set operator only after selecting number
        if(displayValue && displayValue !== '-') {
            // validate operator
            if(Validate.validateOperator(operator)) {
                if(displayValue && selectedOperator && storedValue) {
                    // if all params are valid (f,o,s) then calc them
                    calculate();
                    setSelectedOperator(operator);
                    setSubstractOperationCondition(false);
                } else {
                        // if displayValue zero than we only change operator value 
                    // in order to display operator on the screen
                    setStoredValue(displayValue); // store displayed value in temp storage
                    setDisplayValue('0'); // set display as 0 to wait for next number
                    setSubstractOperationCondition(false);
                    setSelectedOperator(operator);
                }            
            }

            if(storedValue && displayValue && selectedOperator && operator === '=') {
                calculate();
            }
        }
    }

    // calculate result value and resets some values
    const calculate = () => {
        const firstNumber = parseFloat(storedValue);
        const secondNumber = parseFloat(displayValue);
        const resultValue = myMath.calculate(firstNumber, secondNumber, selectedOperator);        
        if(resultValue !== 'Math Arithmetic Error') {
            setStoredValue('');
            setDisplayValue(resultValue);
            const resRecentValue = Validate.validateOutput(`${firstNumber}${selectedOperator}${secondNumber}=${resultValue.substring(0,11)}`);
            setRecentOperation(resRecentValue);
            setSelectedOperator('');
            setSubstractOperationCondition(true);
        } else {
            clearAll();
        }
        
        
    }
    
    return(
        <div className="calculator-container">
            <History recentOperation={recentOperation}
                     currentOperator={selectedOperator}    
            />
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