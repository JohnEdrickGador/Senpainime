import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ImageSlider from "../components/ImageSlider";
import CardsContainer from "../components/CardsContainer";
import { MostPopular } from "../types/types";
// import { Navigate, useNavigate } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(false);
  const [mostPopular, setMostPopular] = useState<MostPopular | null>(null);

  const mapMostPopular = (api: MostPopular): MostPopular => {
    return {
      data: api.data,
    };
  };
  const getPopular = async () => {
    setLoading(true);
    const response = await fetch(
      `https://api.jikan.moe/v4/top/anime?limit=10&&type=movie&&filter=bypopularity`,
    );
    const raw: MostPopular = await response.json();
    const mostPopularAnimes = mapMostPopular(raw);
    setMostPopular(mostPopularAnimes);
    setLoading(false);
  };

  //add empty array so that the function will only be called once
  useEffect(() => {
    getPopular();
  }, []);

  useEffect(() => {
    console.log(mostPopular?.data[0]);
  }, [loading]);

  return (
    <div>
      <Navbar />
      <div className="recommendations">
        <p>Top 10 Most Popular</p>
        <CardsContainer searchResults={mostPopular} />
      </div>
    </div>
  );
}

export default Home;
