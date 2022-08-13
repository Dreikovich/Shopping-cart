import React from 'react'
import {useState} from "react"
import Card from '../components/Card'
const Favorites = ({favorites,onAddToCart,onAddToFavorites}) => {
    



    
  return (
    <div className="favorites p-40">
        <h2>Favorites</h2>
        <div className="item d-flex flex-wrap" >
        {favorites && favorites.map((item,index) =>(
            <Card key = {index} items={item} onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} favorited={true} {...item}/>
           
            
        
            
        ))}
        </div>
                
    </div>
  )
}

export default Favorites