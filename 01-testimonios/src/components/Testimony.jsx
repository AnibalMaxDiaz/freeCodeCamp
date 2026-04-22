import React from 'react'
import imageShawn from "../assets/images/imageShawn.png"
const Testimony = (props) => {
  return (
    <div className="testimony-container">
      <img 
        className="image-testimony" src={imageShawn} alt="image-shawn" />
      <div className="text-container">
        <p className="name-testimony">{props.name} in {props.country}</p>
        <p className="position-testimony" > {props.position} at {props.enterprice}</p>
        <p className="text-testimony">"{props.text}"</p>
      </div>
    </div>
  )
}

export default Testimony
