import React, { useEffect, useState } from 'react'

function Effect() {

    const [count,setCount] = useState(0);
    const [sam,setSam] = useState(true);
    console.log("hello i am component");
    
    useEffect( ()=>{
      console.log("hey i am useeffect");
    }, [count,sam] )

  return (
    <div>
        <h1 onClick={()=>setCount(count+1)} >Counter: {count}</h1>
    </div>
  )
}

export default Effect