import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

function Card({text,image,id,type}) {
  
  const navigate = useNavigate();
  // const [charPic, setCharPic] = useState("")
  //navigate to profile page
  const transfer = () => {
    navigate(`/anime/${id}`)
  }

  // const getCharPic = async () => {
  //   const temp = fetch(`https://api.jikan.moe/v4/characters/${id}`)

  //   .then(res => res.json())
  //   setCharPic(temp.data)
  // }

  return (
    <div className={type === "character" ? "character-card" : "card"} onClick={transfer}>
        <img src={image} alt={text} onClick={transfer}/>
        <div className='card-info' onClick={transfer}>
            <p>{text}</p>
        </div>
    </div>
  )
}

export default Card