import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import ImageSlider from '../components/ImageSlider';
// import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const [topAnime, setTopAnime] = useState([]);
  // const [mostPopular, setMostPopular] = useState([]);

  //API Call for top 10 anime
  const getTopFive = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/top/anime?limit=10&&type=tv&&filter=favorite`)

    .then(res => res.json())
    setTopAnime(temp.data);
  }

  //add empty array so that the function will only be called once
  useEffect(() => {
    getTopFive();
  },[])
  
  
  return (
    <div>
        <Navbar/>
        <div className='slider-container'>
          <ImageSlider topAnime = {topAnime}/>
        </div>
    </div>
  )
}

export default Home