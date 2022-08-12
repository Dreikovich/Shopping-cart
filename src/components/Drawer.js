import React from 'react'

const Drawer = ({onOpenedCart, cartItems=[]}) => {
    console.log(cartItems)
    
  return (
    <div className="overlay">
        <div className="drawer d-flex flex-column">
            <h2 className="d-flex  align-center justify-between">Cart
            <img onClick={onOpenedCart} className="cu-p" width={22} height={22} src="image/close.png" alt="close">
            </img>
            
            </h2>
            <div className="items">
            {cartItems && cartItems.map((item, index)=>(
                <div className="cartObject d-flex  mb-20" key={index}>
                    <div className="cartItem d-flex align-center justify-between">
                        
                        <div className="description d-flex flex-row align-center">
                            <img width={64} heigth={64} src={item.image} alt="cartImage"></img>
                            <div>
                            <p>{item.description}</p>
                            <b>Price:{item.price}$</b>
                            </div>
                            
                        </div>
                        <div className="d-flex align-center ml-20 " >
                            <img className="removeBtn" width={22} height={22} src="image/icons8-remove-50.png"></img>
                        </div>
                    </div>
                </div>
            ))}
            
            
            </div>
            <div className="bottomTotalBlock">
                <ul>
                    <li>
                        <span>Total: </span>
                        <div></div>
                        <b>5000$</b>
                    </li>
                    <li>
                        <span>TAX: </span>
                        <div></div>
                        <b>50%</b>
                    </li>
              
                </ul>
                 <button className="greenButton">Checkout</button>
            
            </div>
        </div>         
    </div>
  )
}

export default Drawer