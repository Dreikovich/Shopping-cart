import React from 'react'

const Drawer = () => {
  return (
    <div className="overlay" style={{display:"none"}}>
        <div className="drawer d-flex flex-column">
            <h2 className="d-flex  align-center justify-between">Cart
            <img className="cu-p" width={22} height={22} src="image/close.png" alt="close">
            </img>
            
            </h2>
            <div className="items">
            
            <div className="cartObject d-flex justify-between mb-20">
                <div className="cartItem d-flex align-center">
                    <img width={64} heigth={64} src="image/kisspng-printed-t-shirt-polo-shirt-clothing-red-t-shirt-5b25be5dd3d570.0055060815292002218677.png" alt="snickers"></img>
                    <div className="description">
                        <p>Regular-fit t-shirt for men</p>
                        <b>1299$</b>
                    </div>
                    <div className="d-flex align-center ml-20">
                        <img className="removeBtn" width={22} height={22} src="image/icons8-remove-50.png"></img>
                    </div>
                </div>
            </div>
            
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