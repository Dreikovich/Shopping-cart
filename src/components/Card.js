import React from 'react'
import {useState, useEffect } from "react"

const Card = ({items, onAddToCart}) => {
    
    const [choosePlus, setChoosePlus] = useState(false)
    const [chooseFavorite, setChooseFavorite] = useState(false)

    const onChangePlus = () => {
        setChoosePlus(!choosePlus)
        const {description, image, price} = items;
        console.log(description, image, price)
        onAddToCart({description, image, price})
        
        
    }

    const onChangeFavorite = () => {
        setChooseFavorite(!chooseFavorite)
    }

    useEffect(()=>{
        console.log("Changing")
    },[choosePlus, chooseFavorite])
    
    
  return (
    <div className="card mb-30">
        <div className="favorite" onClick={onChangeFavorite}>
            {!chooseFavorite?<img width={22} height={22} src='image/heart-unliked.svg' alt="unliked heart"></img>:
            <img width={22} height={22} src='image/heart-liked.svg' alt="liked heart"></img>}
            
        </div>
      {/* <img width={22} height={22} src="image/heart-liked.svg" alt="unliked heart"></img> */}
        <img width={156} height={156}src={items.image} alt="t-shirt"></img>
        <h5>{items.description}</h5>
        <div className="d-flex justify-between align-center">
            <div className="cost d-flex flex-column ">
                <span>Price:</span>
                <b>{items.price}$</b>
            </div>
            <button onClick={onChangePlus}>
                {choosePlus===false?<img width={20} height={20} src="image/plus.png" alt="plus"></img>:<img width={30} height={30} src="image/check.png" alt="check"></img>}
            </button>
        </div>
  </div>
  )
}

export default Card