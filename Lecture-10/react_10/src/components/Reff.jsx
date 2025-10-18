import React, { useRef, useState } from 'react'

function Reff() {
    const [count,setCount] = useState(0);
    function handleInc(){
        setCount(count+1)
    }

    const countRef = useRef(0);
    function handleIncRef(){
        // console.log(countRef.current);
        countRef.current++;
    }

  return (
    <div>
        <h1>Count: {count}</h1>
        <button onClick={handleInc} >Increment State</button>
<hr />
        <h1>Ref: {countRef.current}</h1>
        <button onClick={handleIncRef} >Increment Ref</button>
    </div>
  )
}

export default Reff