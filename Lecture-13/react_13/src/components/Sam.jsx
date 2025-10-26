import { useState } from "react";
function Sam(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <Count count={count} setCount={setCount} />
        </div>
    )
}
export default Sam;

function Buttons({setCount,count}){
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Inc</button>
            <button onClick={()=>setCount(count-1)}>Dec</button>
        </div>
    )
}
function Count({count,setCount}){
    return(
        <div>
            <h2>Count: {count}</h2>
            <Buttons count={count} setCount={setCount} />
        </div>
    )
}