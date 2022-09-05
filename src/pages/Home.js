import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider';
import CardsContainer from '../components/CardsContainer';
// import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const [topAnime, setTopAnime] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  //API Call for top 10 anime
  const getTopTen = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10&&type=tv&&filter=favorite`)

    .then(res => res.json())
    setTopAnime(temp.data);
  }

  const getPopular = async () => {
    const temp2 = await fetch(`https://api.jikan.moe/v4/top/anime?limit=30&&type=movie&&filter=bypopularity`)

    .then(res => res.json());
    setMostPopular(temp2.data)
  }

  //add empty array so that the function will only be called once
  useEffect(() => {
    getTopTen();
    var delay = 2000;
    setTimeout(() => {
      getPopular();
    },delay)
    
  },[])
  
  
  return (
    <div>
        <Navbar/>
        <div className='slider-container'>
          <ImageSlider topAnime = {topAnime}/>
        </div>
        <div className='recommendations'>
          <p>Most popular</p>
          <CardsContainer searchResults={mostPopular} />

        </div>
    </div>
  )
}

export default Home