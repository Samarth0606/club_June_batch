import React, { useState } from 'react'

function Vegetables( { vegetables }) {
    const [isClicked,setIsClicked]  = useState(false)

    function handleClick(){
        setIsClicked(true)
    }

  return (
    <div>
        <h1>Vegetables: </h1>
        <button onClick={handleClick} >Pick 30th</button>
        {
            vegetables.map((item)=>{ return(
                <div style={ isClicked && item.pickDate==='2023-03-30'?{color:'green'}:{color:"black"} }>
                    <h1>Name: {item.name}</h1>
                    <h1>Pick Date: {item.pickDate} </h1>
                </div>
            ) })
        }
    </div>
  )
}

export default Vegetables