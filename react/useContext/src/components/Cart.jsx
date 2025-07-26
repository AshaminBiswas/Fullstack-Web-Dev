import React from 'react'
import { useCart } from '../context/CartContext'
function Cart() {
  const cart = useCart()
  const total = cart.item.reduce((a, b) => a + b.price, 0)
  return (
    <div>
      <h1>Cart Total</h1>
      <ul>
        {cart && cart.item.map((i) => {
          return (
            <li>{i.name} --- ${i.price}</li>
          )
        })}
      </ul>
      <h5>Total Amount - {total}</h5>
    </div>
  )
}

export default Cart
