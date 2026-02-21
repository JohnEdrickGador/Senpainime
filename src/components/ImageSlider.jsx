import React, {useState} from 'react'
import Slide from './Slide'
import BtnSlider from './BtnSlider'

function ImageSlider({topAnime}) {
  const [slideIndex, setSlideIndex] = useState(0);

  const nextSlide = () => {
    if (slideIndex !== 9) {
        setSlideIndex(slideIndex + 1);
    }
    else if(slideIndex === 9){
        setSlideIndex(0);
    }
  }

  const prevSlide = () => {
    if (slideIndex === 0) {
        setSlideIndex(9)
    } else {
        setSlideIndex(slideIndex - 1);
    }
    
  }


  return (
    <div className='imageSlider'>
        
        {
            topAnime.map((anime,i) => {
                return <Slide key={i} image={anime.images.webp.image_url} title={anime.title_english} synopsis={anime.synopsis} rating={anime.rating} genres={anime.genres} trailer={anime.trailer} animation={slideIndex === i ? 'slide-anim slide' : "slide"}/>
            })
        }
        <BtnSlider move={nextSlide} direction={"next"}/>
        <BtnSlider move={prevSlide} direction={"prev"}/>
    </div>
  )
}

export default ImageSlider