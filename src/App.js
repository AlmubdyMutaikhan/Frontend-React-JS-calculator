import React from 'react'
import './App.css';
import Calculator from './components/calculator/Calculator'

const App = () => {
    return(
        <div className="container">
            <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
            <h1>Calculator <span>[ Hacker mode ]</span></h1>
            <Calculator />
        </div>
    )
}

export default App