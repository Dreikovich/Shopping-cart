import React from 'react'
import AppContext from "../context"
import {useContext} from 'react'
import OrderItems from '../components/OrderItems/OrderItems'
import DeliveryForm from '../components/DeliveryForm/DeliveryForm'
const Checkout = () => {
    // const {cartItems} = useContext(AppContext)
  return (
    <div className="checkout p-40">
        <h3>Order details</h3>
        <OrderItems />
        <h3 style={{marginTop: '50px'}}>Delivery</h3>
        <DeliveryForm />
    </div>
  )
}

export default Checkout