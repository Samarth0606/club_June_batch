import React from 'react'

function Search({restArr,setAllRestArr}) {
    function handleInp(searchedText){
        const searchedRest = restArr.filter(restaurant=>restaurant.info.name.toLowerCase().includes(searchedText.toLowerCase()))
        setAllRestArr(searchedRest)
    }
  return (
    <div>
        <input onChange={(e)=>handleInp(e.target.value)} type="text" placeholder='Search the Restaurant...'/>
    </div>
  )
}

export default Search