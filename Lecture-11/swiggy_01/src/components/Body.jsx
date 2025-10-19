import React from 'react'
import RestaurantCard from './RestaurantCard'
import ApiCalling from './ApiCalling'

function Body() {
    let restArr = ApiCalling();
  return (
    <div>
        <h1 className='font-bold text-xl m-8'>Restaurants with online food delivery in Chhindwara</h1>
        <button className='border rounded w-1/12 mx-12'>Rating 4.5+</button>
        <button className='border rounded w-1/12 ml-6'>Reset</button>

        <div className='flex flex-wrap w-10/12 m-auto'>
            <RestaurantCard restArr={restArr} />
        </div>
    </div>
  )
}

export default Body