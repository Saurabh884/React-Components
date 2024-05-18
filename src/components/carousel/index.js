import React from 'react'
import Carousel from './carousel';

const CarouselApp = () => {
    const images = [
        "https://images.pexels.com/photos/326055/pexels-photo-326055.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800",
        "https://images.pexels.com/photos/135940/pexels-photo-135940.jpeg?auto=compress&cs=tinysrgb&w=800"
    ]
  return (
    <div>
        <h1>Carousel Component</h1>
        <Carousel images={images} />
    </div>
  )
}

export default CarouselApp;