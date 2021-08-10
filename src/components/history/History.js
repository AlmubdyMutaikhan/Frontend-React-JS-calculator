import './styles/index.css'
// init history
let data = {
    history : []
}

const History = ({recentOperation, currentOperator}) => {
    const writeToJson = (newValue) => {
        if(data.history.length > 10) {
            data.history.shift();
        } 
        if(!data.history.includes(newValue)) {
                data.history.push(newValue);       
            }
    }
    
    setInterval(()=>{
        writeToJson(recentOperation);
    }, 500);
    
    /* TODO: real time update of state */
    return(
        <div className="history-container">
            <h2 className="history">History</h2>
            <h3 className="current-operation">Current math operation: <span>{`[ ${currentOperator === '=' ? '' : currentOperator} ]` } </span></h3>
            {data.history.map((value, iterator) => (
                <div key={iterator}><p id="log">{value}</p></div>
            ))}
           
        </div>
    )
}

export default History;