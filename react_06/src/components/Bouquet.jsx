import React from 'react'

function Bouquet( {bouquet} ) {
  return (
    <div>
        {
            // bouquet.filter(item => item.price>2000 ? true:false)
            bouquet.filter(item => item.price>2000 ? true:false).map(item=>{return(
                item.flowers.map(item=> item)
            )})
        }
    </div>
  )
}

export default Bouquet