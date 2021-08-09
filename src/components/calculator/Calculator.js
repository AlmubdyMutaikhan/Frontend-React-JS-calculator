import { useState } from 'react'
import './styles/index.css'
import InputDisplay from '../inputDisplay/InputDisplay'
import KeyLayout from '../keyLayout/keyLayout'
const Calculator = () => {
    
    return(
        <div className="calculator-container">
            <InputDisplay/>
            <KeyLayout/>
        </div>
    )
}

export default Calculator;