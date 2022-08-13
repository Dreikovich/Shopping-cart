import React from 'react'
import AppContext from "../context"
import {useContext} from 'react'
import OrderItems from '../components/OrderItems/OrderItems'
const Checkout = () => {
    // const {cartItems} = useContext(AppContext)
  return (
    <div className="checkout p-40">
        <h3>Order details</h3>
        <OrderItems />
        {/* <h3 style={{marginTop: '40px'}}>Delivery</h3> */}
        {/* <DeliveryForm /> */}
    </div>
  )
}

export default Checkout