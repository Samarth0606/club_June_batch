import React, { useState } from 'react'

function PlayAround() {
     const [count,setCount] = useState(0);

    function handleInc(){
        setCount((d)=>d+2) // 
        setCount((f)=>f+3) //  
        setCount(count+3)  //  
    }
  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h1>Count: {count}</h1>
    </div>
  )
}

export default PlayAround
