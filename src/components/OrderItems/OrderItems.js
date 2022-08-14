import React from 'react'
// import styles from './OrderItems.module.scss'
import styles from './OrderItems.module.scss'
import AppContext from '../../context'
import {useContext} from 'react'

const OrderItems = () => {
    const {cartItems, onDeleteItem} = useContext(AppContext)
    console.log(cartItems)
  return (
    <div className={styles.orderItems}>
        
        {
        cartItems.length>0?cartItems.map((item, index)=>(
            <div key={index}className={styles.orderItem}>
                <div className={styles.content}>
                    <img width={128} height={128} src={item.image} alt='image'></img>
                </div>
                <div className={styles.content}>
                    <span>{item.description}</span>
                </div>
                <div className={styles.content}>
                    <span>{item.price}$</span>
                </div>
                <div className={styles.content}>
                    <button onClick={()=>onDeleteItem(item.id)}>
                        <img width={30} height={30} src="../../../image/check.png"></img>
                    </button>
                </div>
                
                
               
            </div>))
        :
        <h2>You should order something</h2>}
    </div>
  )
}

export default OrderItems