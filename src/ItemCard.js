import { AddRounded } from '@mui/icons-material';
import React from 'react'

function ItemCard({imgSrc, name, time, description, terms}) {
  return (
     <div className="itemCard">
        <div className="itemContent">
            <img src={imgSrc} alt="" className="imgBox"/>
            <h2> {name} </h2>
            <h3>{time}</h3>
            <h4>{description}</h4>
            <h5>{terms}</h5>
            <i className="addToCart">
                <AddRounded/>
            </i>
        </div>

     </div>  
  )
}

export default ItemCard;

