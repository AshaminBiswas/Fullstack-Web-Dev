import React from 'react'
import { useContext } from 'react'
import { useCart } from '../context/CartContext'
function Card({ name = "item1", price = "100" }) {

  const card = useCart()
  return (
    <div>
      <h1>Item {name}</h1>
      <p>Price: ${price}</p>
      <button onClick={() => {
        card.setItem([...card.item, { name: name, price: price },])
        console.log(card);
      }}>Add to Cart</button>
    </div>
  )
}

export default Card
