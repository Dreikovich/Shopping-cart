import React from 'react'
import {Link} from 'react-router-dom'
import AppContext from '../context'
import {useContext} from 'react'

const Header = ({onOpenedCart}) => {
  const {cartItems} = useContext(AppContext)
  const totalPrice = cartItems.reduce((sum, item) =>sum + item.price,0)
  return (
    <header className="p-40 ">
      <Link style={{color:"inherit", textDecoration: "none" }}to="/">
      <div className="headerLeft cu-p">
          <img width={64} height={64} src ="image\icons8-grocery-store-96.png" alt="store"></img>
          <div className="headerLeftInfo">
            <h3>React T-shirt</h3>
            <p>T-shirt online store</p>
          </div>
        </div>
      </Link>
        
        
        <ul className="headerRight">
          <li className="cu-p" onClick={()=>console.log("vdffdv")}>
            <Link to="/favorites">
              <img  width={20} height={20}src='image/heart-liked.svg' alt='favorite'>
              </img>
            </Link>
            
          </li>
          <li onClick={onOpenedCart} className="cu-p d-flex align-center">
            
            <img width={20} height={20}src='image/shopping-cart.png' alt='shopping-cart'>
            </img>
            <span>{totalPrice}$</span>
          </li>
          <li>
            <img src ="image/user.png" width={20} height={20} alt="user">
            </img>
          </li>
        </ul>
      </header>
  )
}

export default Header