import './styles/index.css'
import { useState } from 'react'

const KeyLayout = ({setOperator, updateDisplayForNumbers, clearDisplay}) => {
     /* INIT STATE */
    // stores number values for input layout
    const [numberValues] = useState([
        '1','2','3','4','5','6','7','8','9','0','.','ce'
    ]);

    // describes arithmetic operator which is gonna be processed
    const [operators] = useState([
        '+','-','x','/','='
    ]);
    
    // DEFINE PROCESS HANDLING FUNCTIONS
    // checks whether operator value is valid or not
    const validateOperator = (operatorValue) => {
        if(operators.includes(operatorValue)) {
            setOperator(operatorValue);
        } 
    }

    // create key layout for number values
    const numberKeys = numberValues.map((value, iterator) => (
        <div className="key" key={`${value}${iterator}`}  onClick={() => (updateDisplayForNumbers(value))}>
            <p>{value}</p>
        </div>
    ))

    // create key layout for operator values
    const operatorKeys = operators.map((value, iterator) => (
        <div className="key" key={iterator} onClick={event => (validateOperator(event.target.innerHTML))}>
            <p>{value}</p>
        </div>
    ))
     
    return(
       <div className="keylayout-container">
           <div className="numberContainer">{numberKeys}</div>
           <div className="reset" onClick={clearDisplay}><p>Clear</p></div>
           <div className="operator-container">{operatorKeys}</div>
       </div>
   )
}

export default KeyLayout;