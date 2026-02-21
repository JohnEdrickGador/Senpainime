import React, { useState } from 'react'

function Slide({image,title, synopsis,rating,genres,animation}) {

  return (
    <div className={animation}>
        <div className='slide-info'>
            <p className='slide-title'>{title}</p>
            <p className='slide-synopsis'>{synopsis}</p>
            <p className='slide-other-infos'>Rating: {rating}</p>
            <div className='slide-genres'>Genres:   
              
                  {genres.map((genre,index) => {
                      return ` ${genre.name}`
                  }).join(',')}
              
            </div>
            
        </div>
        <img src={image} className="slide-poster"/>
        {/* `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` */}
    </div>
  )
}

export default Slide