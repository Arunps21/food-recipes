import React from 'react'

function CarouselImage({imageUrl}) {
  return (
    <>
    <img src={imageUrl} alt="Image Not Found" style={{width:"100%", height:"650px"}}/>
    </>
  )
}

export default CarouselImage