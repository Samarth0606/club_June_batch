import React, { memo, useCallback, useState } from 'react'

function Hello() {
    let user = useCallback(function(){
        console.log("heyy");
    } , [])
    
    const [count,setCount] = useState(0);
    
  return (
    <div>
        <Chotu username={user}  />
        <button onClick={()=>setCount(count+1)}>Counter</button>
    </div>
  )
}

const Chotu = memo( function({username}){
    return(<div>
        <h1>Naam: {username()} </h1>
    </div>)
} )



export default Hello