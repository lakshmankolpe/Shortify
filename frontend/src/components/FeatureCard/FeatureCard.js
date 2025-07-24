import React from 'react'
import "./FeatureCard.css"

function FeatureCard({image,title,featurText}) {
  return (
    <div  className='feature-card'> 
        <img src= {image}className="featur-icon"/>
        <h3 className='feature-title'>{title}</h3>
        <p className='feature-text'>{featurText}</p>
    </div>
  )
}

export default FeatureCard