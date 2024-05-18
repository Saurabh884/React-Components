import React, { useState } from 'react'
import "./carousel.css"

const Carousel = ({images}) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex(prevIndex=> prevIndex===images.length-1 ? 0 : prevIndex+1)
    };

    const handlePrev = () => {
        setCurrentIndex(prevIndex=> prevIndex===0 ? images.length-1 : prevIndex-1)
    }
  return (
    <div className='carousel'>
        <button onClick={handlePrev}>Prev</button>
         <div className='image-container'>
            <img className='image' src={images[currentIndex]} alt={`Slide ${currentIndex+1}`} />
         </div>
        <button onClick={handleNext}>Next</button>

    </div>
  )
}

export default Carousel;