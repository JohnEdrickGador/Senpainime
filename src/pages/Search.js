import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../components/Navbar';
// import Card from '../components/Card';
import CardsContainer from '../components/CardsContainer';

function Search() {
  const params = useParams();
  const [searchResults, setSearchResults] = useState([]);
  //search Anime
  const searchAnime = async () => {
    const temp = await fetch(`https://api.jikan.moe/v4/anime?letter=${params.queryString}&&limit=10&&type=TV,movie`)

    .then(res => res.json(),1000)
    setSearchResults(temp.data);
  }

  useEffect(() => {
    searchAnime();
  },[])

  console.log(params.queryString)
  return (
    <div className='search-page'>
        <Navbar />
        <div className='results-container'>
            <p>{`Results for "${params.queryString}"`}</p>
            {searchResults.length > 0 ? <CardsContainer searchResults={searchResults} /> : <h2>{`No results found for "${params.queryString}"`}</h2>}
        </div>
    </div>
    )
    
}

export default Search