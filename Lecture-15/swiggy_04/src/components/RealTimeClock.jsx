import React, { useEffect, useState } from 'react'

function RealTimeClock() {
    const [time,setTime] = useState(new Date().toLocaleTimeString());

    useEffect(()=>{
        let id = setInterval(()=>{
            setTime(new Date().toLocaleTimeString())
        }, 1000)
        return ()=>clearInterval(id)
    },[])
  return (
    <div>RealTimeClock: {time}</div>
  )
}

export default RealTimeClock