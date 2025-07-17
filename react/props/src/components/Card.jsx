import React from 'react'

function Card({ username = "Ashamin", post = "Frontend Developer", url = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTsYPQtMUgcYlG8J9BPqNEGLybEbaF2vAsdw&s" }) {
  return (
    <div>
      <img src={url} alt="" />
      <h1 className='text-2xl font-bold'>A card component</h1>
      <h1>{username}</h1>
      <h2>{post}</h2>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam, maxime.</p>
    </div>
  )
}

export default Card
