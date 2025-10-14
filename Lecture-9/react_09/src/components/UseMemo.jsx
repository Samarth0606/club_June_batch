import React, { useMemo, useState } from 'react'

function UseMemo() {
    const [count,setCount] = useState(0);
    const [inp,setInp] = useState(0);

    function handleInp(e){
        setInp(e.target.value)
    }

    let output = useMemo(function(){
        let sum = 0;
        for(let i=1;i<=inp;i++){
            console.log("loop chala");
            sum+=i;
        }
        return sum;
    }, [inp])

  return (
    <div>
        <input onChange={handleInp} type="number" value={inp}/>
        <h1>Sum: {output}</h1>
        <button onClick={()=>setCount(count+1)}>Click: {count}</button>
    </div>
  )
}

export default UseMemo