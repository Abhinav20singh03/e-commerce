import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import "./Cart.css"
import { MdOutlineHorizontalRule } from "react-icons/md";
import CartCard from '../components/CartCard';
const Cart = () => {
  const {cartProducts,setCartProducts,products,orderedProducts,setOrderedProducts,shipping} = useContext(AppContext);
  const [subtotal,setSubtotal] = useState(0);
  const [total,settotal] = useState(0);
  
  const checkoutHandler = ()=>{
    console.log("checkout");
  }

  useEffect(()=>{
    let subtotalSum= 0;
    let totalSum= 0;
    cartProducts.forEach((element)=>{
      subtotalSum += element.price*element.quantity;
    })
    setSubtotal(subtotalSum);
    const value = subtotalSum+shipping
    settotal(value);
  },[cartProducts])
  
  return (
    <div className='cart-container'>
      <div className='cart-heading'>YOUR CART <MdOutlineHorizontalRule size="35px" /></div>
      <div className='cart-products'>
      {
        cartProducts.length === 0 ? 
        (<div>Cart is Empty !</div>) : 
        (cartProducts.map((ele,index)=>{
          return <CartCard key={index} product={ele}/>
        }))
      }
      </div>
      {
        cartProducts.length == 0 ?
        (<></>)
        :
        (<>
          <div className='cart-heading'>CART TOTAL <MdOutlineHorizontalRule size="35px" /></div>
          <div className='cart-total'>
        <div className='total-elements'>
          <div className='total-element'>Subtotal</div>
          <div className='total-element-price'>₹{subtotal}.00</div>
        </div>
        <div className='total-elements'>
          <div className='total-element'>Shipping</div>
          <div className='total-element-price'>₹{shipping}.00</div>
        </div>
        <div className='total-elements'>
          <div className='total-element'>total</div>
          <div className='total-element-price'>₹{total}.00</div>
        </div>
        <div className='checkout-btn' onClick={checkoutHandler}>CHECKOUT</div>
      </div>
        </>
          )
      }
      
    </div>
  )
}

export default Cart
