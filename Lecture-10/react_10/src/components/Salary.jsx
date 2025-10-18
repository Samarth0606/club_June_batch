import React, { useEffect, useRef } from 'react'

function Salary() {
    let salary = 400000;
    let spanEl = useRef()

    useEffect(()=>{
        setTimeout(function(){
            spanEl.current.innerText = 20000
        } , 3000)
    } , [])

  return (
    <div>Salary: <span ref={spanEl}>{salary}</span> </div>
  )
}

export default Salary

// -----------------------------------------------------

// import React, { useEffect } from 'react'

// function Salary() {
//     let salary = 400000;

//     useEffect(()=>{
//         setTimeout(function(){
//             document.getElementById('salar').innerHTML = 20000
//         } , 3000)
//     } , [])

//   return (
//     <div>Salary: <span id='salar'>{salary}</span> </div>
//   )
// }

// export default Salary