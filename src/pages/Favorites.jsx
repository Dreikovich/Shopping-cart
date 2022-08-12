import React from 'react'
const Favorites = ({favorites}) => {
  return (
    <div className="favorites p-40">
        <h2>Favorites</h2>
        <div className="item d-flex flex-wrap" >
        {favorites && favorites.map(item =>(
           
                <div className="card mb-30 ">
            
                    <img width={156} height={156}src={item.image} alt="t-shirt"></img>
                    <h5>{item.description}</h5>
                    <div className="d-flex justify-between align-center">
                        <div className="cost d-flex flex-column">
                            <span>Price:</span>
                            <b>{item.price}$</b>
                        </div>
                        
                    </div>
                
           </div>
        
            
        ))}
        </div>
                
    </div>
  )
}

export default Favorites