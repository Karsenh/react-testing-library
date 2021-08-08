import React, {useState} from 'react'
import '../Counter/Counter.css'

const Counter = () => {
    const [counterVal, setCounterVal] = useState(0);
    const [inputVal, setInputVal] = useState(1);

    const addToCount = () => {
        setCounterVal(counterVal + inputVal)
    }

    const subtractFromCount = () => {
        setCounterVal(counterVal - inputVal)
    }
    
    return (
        <div>
           <h1 data-testid='header'>My Counter</h1>
            <h2 data-testid='counter'>{counterVal}</h2>
            <button data-testid='sub-btn' onClick={subtractFromCount}>-</button>
            <input className='text-center' type="number" data-testid='input' value={inputVal} onChange={(e) => setInputVal(parseInt(e.target.value))} />
            <button data-testid='add-btn' onClick={addToCount}>+</button>
        </div>
    )
}

export default Counter
