import { useContext, useState } from "react";
import { CountContext } from "./Context";
function ContextApi(){
    const [count,setCount] = useState(0);
    return(
        <div>
            <CountContext.Provider value={count}>
                <Count setCount={setCount} />
            </CountContext.Provider>
        </div>
    )
}
export default ContextApi;

function Buttons({setCount}){
    let counttt = useContext(CountContext)
    return(
        <div>
            <button onClick={()=>setCount(counttt+1)}>Inc</button>
            <button onClick={()=>setCount(counttt-1)}>Dec</button>
        </div>
    )
}
function Count({setCount}){
    return(
        <div>
            <CountRenderer />
            <Buttons setCount={setCount} />
        </div>
    )
}
function CountRenderer(){
    let counttt = useContext(CountContext)
    return(
            <h2>Count: {counttt}</h2>
    )
}