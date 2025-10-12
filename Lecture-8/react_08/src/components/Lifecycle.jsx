import { useEffect, useState } from "react";

function Lifecycle(){

    const [count,setCount] = useState(0);

    useEffect(()=>{
        if(count === 0){ console.log("componentDidMount") }
        if(count>=1 && count <=5){ console.log("ComponentDidUpdate") }
        //cleanup fn
        if(count === 6){
            return ()=>{ console.log("ComponentWillUnmount") }
        }
    },[count])


    return(
        <div>
            <button onClick={()=>setCount(count+1)}> Count: {count} </button>
        </div>
    )
}

export default Lifecycle;