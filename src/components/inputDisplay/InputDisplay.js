import './styles/index.css'

const InputDisplay = ({displayValue}) => {
    return(
        <div className="input-container">
            <input type="text" className="inputField" value={displayValue}/>
        </div>
    )   
}

export default InputDisplay;