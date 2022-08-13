import React from 'react'
import {useState} from "react"
import Card from '../components/Card'
import AppContext from '../context'
const Favorites = ({items, onAddToCart,onAddToFavorites, onDeleteFavotiteItem}) => {

  const {favorites }= React.useContext(AppContext)
    
    
  return (
    
    <div className="favorites p-40">
        <h2>Favorites</h2>
        <div className="item d-flex flex-wrap" >
        {favorites && favorites.map((item,index) =>(
            <Card key = {index} items={item} onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites} {...item} onDeleteFavotiteItem={(id)=>onDeleteFavotiteItem(id)}/>

        ))}
        </div>
                
    </div>
  )
}

export default Favorites