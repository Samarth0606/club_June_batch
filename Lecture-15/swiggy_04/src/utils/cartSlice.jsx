import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState:{
    items:[]
  },
  reducers: {
   addItem: (state,action)=>{
    state.items.push(action.payload)
   },
   removeItem: ()=>{},
   clearCart: ()=>{}
  },
})

export const { addItem, removeItem, clearCart } = cartSlice.actions

export default cartSlice.reducer