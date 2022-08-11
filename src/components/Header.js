import React from 'react'

const Header = () => {
  return (
    <header className="p-40">
        <div className="headerLeft">
          <img width={64} height={64} src ="image\icons8-grocery-store-96.png" alt="store"></img>
          <div className="headerLeftInfo">
            <h3>React T-shirt</h3>
            <p>T-shirt online store</p>
          </div>
        </div>
        
        <ul className="headerRight">
          <li>
            <img width={20} height={20}src='image/shopping-cart.png' alt='shopping-cart'>
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