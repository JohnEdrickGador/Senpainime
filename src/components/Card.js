import React from 'react'

function Card({text,image}) {
  return (
    <div className='card'>
        <img src={image} alt={text} />
        <div className='card-info'>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card