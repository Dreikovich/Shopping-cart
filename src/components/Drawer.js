import React from 'react'
import {useContext} from 'react'
import AppContext from '../context'
import {Link } from 'react-router-dom'
const Drawer = ({onOpenedCart, cartItems=[], onDeleteItem}) => {
    

    const totalPrice = cartItems.reduce((sum, item) =>sum + item.price,0)
    console.log(totalPrice)
    
    
  return (
    <div className="overlay">
        <div className="drawer d-flex flex-column">
            <h2 className="d-flex  align-center justify-between">Cart
            <img  onClick={onOpenedCart} className="close cu-p" width={22} height={22} src="image/close.png" alt="close">
            </img>
            </h2>
            {
            cartItems.length>0?
            <div >
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
                                <img onClick={()=>onDeleteItem(item.id)} className="removeBtn" width={22} height={22} src="image/icons8-remove-50.png"></img>
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
                            <b>{totalPrice}$</b>
                        </li>
                        <li>
                            <span>TAX 10%: </span>
                            <div></div>
                            <b>{totalPrice*0.1}$</b>
                        </li>
                    </ul>
                    <Link to="/order">
                        <button className="greenButton" onClick={onOpenedCart}>Checkout</button>
                    </Link>
                    
                </div>
            </div>
            : 
            <div className="emptyCart d-flex align-center flex-column justify-center">
                <img width={128} height={128} src="image/emptyCart.png" alt="empty"></img>
                <p>Your cart is empty, please return to store to order T-shirt</p>
                <button className="returnButton" onClick={onOpenedCart}>Return to the store</button>

            </div>
            }
            
            
        </div>         
    </div>
  )
}

export default Drawer