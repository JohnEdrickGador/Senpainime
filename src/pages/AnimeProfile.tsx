import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar';
import ScrollGallery from '../components/ScrollGallery';

function AnimeProfile() {
  const params = useParams();
  const [anime,setAnime] = useState({"images":
    {"jpg":{
      "image_url":""
    },
    "genres":[
      {
        "mal_id": 0,
        "type": "string",
        "name": "string",
        "url": "string"
      }
    ]
  }});

  //search anime by id
  const getAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime/${params.animeId}/full`)

    .then(res => res.json());
    setAnime(temp.data)
  }

  useEffect(() => {
    getAnime();
  },[])

  return (
    <div>
      <Navbar />
      <div className='profile-container'>
        <div className='primary-info'>
          <img src={anime.images.jpg.image_url} />
          <div className='primary-text'>
            <p className='title'>{anime.title}</p>
            <p>{anime.synopsis}</p>
            <p>Rating: {anime.rating}</p>
            <p>Genres:  
              {anime.genres ?.map((genre,index) => {
                return ` ${genre.name}`
              }).join(',')}
            </p>
            <p>Status: {anime.status}</p>
            <p>Popularity: {anime.popularity}</p>
          </div>
        </div>
      </div>
      <div className='characters-scroll'>
        <p className='title'>Characters:</p>
        <ScrollGallery animeId={params.animeId}/>
      </div>

    </div>
  )
}

export default AnimeProfile