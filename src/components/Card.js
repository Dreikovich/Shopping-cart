import React from 'react'
import {useState, useEffect } from "react"
import AppContext from '../context'

const Card = ({onAddToCart, onAddToFavorites, favorited=false, id, description, image, price, isAdded=false, onDeleteFavotiteItem }) => {
    
    
    const [choosePlus, setChoosePlus] = useState(isAdded)
    const [chooseFavorite, setChooseFavorite] = useState(favorited)
    const {isItemAdded, isItemFavorited} = React.useContext(AppContext)
    

    const onChangePlus = () => {
        setChoosePlus(!choosePlus)
        onAddToCart({id, parentId:id, description, image, price})
        
        
    }

    const onChangeFavorite = (obj) => {
        setChooseFavorite(!chooseFavorite)

        const {id,parentId, description, image, price} = obj
        onAddToFavorites({id, parentId:id, description, image, price})
            

       
    }

    // useEffect(()=>{
    //     console.log("Changing")
    // },[choosePlus, chooseFavorite])
    
    
  return (
    <div className="card mb-30">
        <div className="favorite" onClick={()=>onChangeFavorite({id, description, image, price})}>
            {!isItemFavorited(description)?<img width={22} height={22} src='image/heart-unliked.svg' alt="unliked heart"></img>:
            <img  width={22} height={22} src='image/heart-liked.svg' alt="liked heart"></img>}
            
        </div>
      {/* <img width={22} height={22} src="image/heart-liked.svg" alt="unliked heart"></img> */}
        <img width={156} height={156}src={image} alt="t-shirt"></img>
        <h5>{description}</h5>
        <div className="d-flex justify-between align-center">
            <div className="cost d-flex flex-column ">
                <span>Price:</span>
                <b>{price}$</b>
            </div>
            <button onClick={onChangePlus}>
                {!isItemAdded(description)?<img width={20} height={20} src="image/plus.png" alt="plus"></img>:<img width={30} height={30} src="image/check.png" alt="check"></img>}
            </button>
        </div>
    </div>
  )
}

export default Card