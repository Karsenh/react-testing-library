import React, {useState} from 'react'

const Counter = () => {
    const [counterVal, setCounterVal] = useState(0);
    const [inputVal, setInputVa] = useState(1);
    
    return (
        <div>
           <h1 data-testid='header'>My Counter</h1>
            <h2 data-testid='counter'>{counterVal}</h2>
            <button data-testid='sub-btn'>-</button>
            <input type="number" data-testid='input' value={inputVal} />
            <button data-testid='add-btn'>+</button>
        </div>
    )
}

export default Counter
