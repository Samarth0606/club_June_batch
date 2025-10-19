import React from 'react'

function RestaurantCard() {
  return (
    <div className='m-8'>
        <img className='w-58 h-42 rounded-xl' src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/RX_THUMBNAIL/IMAGES/VENDOR/2025/9/1/bd7954b5-a431-4726-b2da-4670ceba472d_1003414.JPG" alt="" />
        <h1 className='font-bold'>Pizza Hut</h1>
        <span className='font-bold'>4.3</span>
        <span className='mx-4'>65-70 mins</span>
        <p>Pizzas</p>
        <p>Chindawara City</p>
    </div>
  )
}

export default RestaurantCard