import React from 'react'

export default function Buttons() {
    function handleClick1(){
        console.log("hello 1");
    }

    function handleClick2(x,y){
        console.log(x,y,"hello 2");
    }
  return (
    <div>
        <button onClick={handleClick1}>click me 1</button>
        <button onClick={ ()=>handleClick2(10,"sam") }>click me 2</button>
    </div>
  )
}
