import React, { useState } from 'react'

function Orange() {
    const [count,setCount] = useState(0);

    function handleInc(){
        console.log(count , "1");
        setCount(count+1)
        console.log(count , "2");
        setCount(count+1)
        console.log(count , "3");
        setCount(count+1)
        console.log(count , "4");
    }
    function handleDec(){
        setCount( (c)=>c-1 ) //hold the value of the prev. state
        setCount( (d)=>d-1 )
        setCount( (e)=>e-1 )
    }
  return (
    <div>
        <button onClick={handleInc}>+</button>
        <h1>Count: {count}</h1>
        <button onClick={handleDec}>-</button>
    </div>
  )
}

export default Orange