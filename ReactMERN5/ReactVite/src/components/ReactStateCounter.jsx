import { useState } from 'react'

const ReactStateCounter = () => {
    // State
    const [Counter,SetCounter]=useState(0);

    const Plus=()=>{
        SetCounter(Counter+1);
    }

    const Minus=()=>{
        SetCounter(Counter-1);
    }

    // View
  return (
    <div>
        <h1>Counter App</h1>
        <h4>{Counter}</h4> <br />
        <button onClick={Plus}>Plus</button>
        <button onClick={Minus}>Minus</button>
    </div>
  )
}

export default ReactStateCounter
