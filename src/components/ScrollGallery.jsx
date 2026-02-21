import React, { useEffect, useState } from 'react';
import Card from './Card';

function ScrollGallery({animeId}) {
  const [characters,setCharacters] = useState([]);
  const [doneFetching, setDoneFetching] = useState(false)

  const getCharacters = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime/${animeId}/characters`)

    .then(res => res.json());
    setCharacters(temp.data.slice(0,15));
    setDoneFetching(true)
  }

  useEffect(() => {
    getCharacters();
  },[])

  if (doneFetching === true) {
    return (
        <div className='scroll-gallery'>
              {characters.map((char,index) => {
                  return <Card text={char.character.name} key={index} id={char.character.mal_id} image={char.character.images.jpg.image_url} type="character"/>
              })}
        </div>
      )
  } else {
    return (<p>Loading...</p>)
  }
  

  
}

export default ScrollGallery