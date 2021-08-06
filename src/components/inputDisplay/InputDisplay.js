import './styles/index.css'

const InputDisplay = ({displayValue}) => {
    return(
        <div className="input-container">
            <input type="text" className="inputField" value={displayValue} readOnly="readonly"/>
        </div>
    )   
}

export default InputDisplay;