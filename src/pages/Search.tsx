import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
// import Card from '../components/Card';
import CardsContainer from '../components/CardsContainer';

function Search() {
  const params = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const sleep = ms => new Promise(
    resolve => setTimeout(resolve, ms)
  );

  //search Anime
  const searchAnime = async () => {
    console.log(params.queryString);
    const temp = await fetch(`https://api.jikan.moe/v4/anime?q=${params.queryString}&&limit=10&&type=TV&&sfw=true`)

    .then(res => res.json())
    console.log(temp.data);
    setSearchResults(temp.data);
  }

  useEffect(() => {
    searchAnime();
  },[])

  sleep(3000)
  return (
    <div className='search-page'>
        <Navbar />
        <div className='results-container'>
            <p>{`Results for "${params.queryString}"`}</p>
            {searchResults != undefined ? <CardsContainer searchResults={searchResults} /> : <h2>{`No results found for "${params.queryString}"`}</h2>}
        </div>
    </div>
    )
    
}

export default Search