import React from 'react'
import '../stylesheets/Testimony.css'
import imageShawn from "../assets/images/imageShawn.png"
import imageSarah from "../assets/images/imageSarah.png"
import imageEmma from "../assets/images/imageEmma.png"

const Testimony = (props) => {
  const images = {
    Shawn: imageShawn,
    Sarah: imageSarah,
    Emma: imageEmma
  };

  return (
    <div className="testimony-container">
      <img 
        className="image-testimony" src={images[props.name]} alt={`image-${props.name}`} />
      <div className="text-container">
        <p className="name-testimony"><strong>{props.name}</strong> in {props.country}</p>
        <p className="position-testimony" > {props.position} at <strong>{props.enterprice}</strong></p>
        <p className="text-testimony">"{props.text}"</p>
      </div>
    </div>
    
  )
}

export default Testimony
