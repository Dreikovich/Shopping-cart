import React from 'react'
import {Link} from 'react-router-dom'

const Header = ({onOpenedCart}) => {
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
          <li onClick={onOpenedCart} className="cu-p">
            <img  width={20} height={20}src='image/shopping-cart.png' alt='shopping-cart'>
            </img>
            <span>1000$</span>
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