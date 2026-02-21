import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Card({text,image,id,type}) {
  
  const navigate = useNavigate();
  //navigate to profile page
  const transfer = () => {
    navigate(`/anime/${id}`)
  }
  return (
    <div className={type === "character" ? "character-card" : "anime-card"} onClick={type === "anime" ? transfer : null}>
        <div className='cover-photo'>
          <img src={image} alt={text} onClick={type === "anime" ? transfer : null} />
        </div>
        <div className='card-info' onClick={type === "anime" ? transfer : null}>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card