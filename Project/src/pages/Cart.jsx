import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
const Cart = () => {
  const {cartProducts , setCartProducts} = useContext(AppContext);
  return (
    <div className='cart-container'>
      {
        cartProducts.length === 0 ? 
        (<div>no product found</div>) : 
        (cartProducts.map((ele)=>{
          return <div key={ele.id}>{ele.name}</div>
        }))
      }
    </div>
  )
}

export default Cart
