import React, { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleIncrement = () =>{
        setCounter(counter=>counter+1)
    }


    const handleDecrement = () =>{
        setCounter(counter=>counter-1)
    }


    const handleReset = () =>{
        setCounter(0)
    }

  return (
    <div>
        <h1>Counter:{counter}</h1>
        <div>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>

    </div>
  )
}

export default Counter