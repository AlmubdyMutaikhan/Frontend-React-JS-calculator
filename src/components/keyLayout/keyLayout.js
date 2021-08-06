import './styles/index.css'

const KeyLayout = ({handleKeyPress, operators, numbers, setOperator, updateDisplayForNumbers, clearDisplay}) => {
    const numberKeys = numbers.map((value, iterator) => (
        <div className="key" key={`${value}${iterator}`}  onClick={() => (updateDisplayForNumbers(value))}>
            <p>{value}</p>
        </div>
    ))
    
    const operatorKeys = operators.map((value, iterator) => (
        <div className="key" key={iterator} onClick={event => (setOperator(event.target.innerHTML))}>
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