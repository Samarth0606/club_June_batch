import { useState } from "react"

function Counter(){
    const [count,setCount] = useState(0);
    function handleInc(){
        setCount(count+1)
    }
    function handleDec(){
        setCount(count-1)
    }

    return(
        <div>
            <button onClick={handleInc} >+</button>
            <h1>Count: {count}</h1>
            <button onClick={()=>handleDec()} >-</button>
        </div>
    )
}

export default Counter