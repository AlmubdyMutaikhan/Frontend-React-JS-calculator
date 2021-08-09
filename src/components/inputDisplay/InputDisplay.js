import './styles/index.css'

const InputDisplay = ({displayValue}) => {
    return(
        <div className="input-container">
            <input type="text" className="inputField" readOnly="readonly" value={displayValue}/>
        </div>
    )   
}

export default InputDisplay;