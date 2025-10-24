import React from 'react'
import { useRouteError } from 'react-router-dom'

function Error() {

    const err = useRouteError()
    // console.log(err , "err");
    

  return (
    <div>
        <h1>OOPS!! WRONG URL</h1>
        <h1>{err.data}</h1>
        <h1>{err.status}</h1>
        <h1>{err.statusText}</h1>
    </div>
  )
}

export default Error