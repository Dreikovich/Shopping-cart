import React from 'react'
import {useState, useContext} from 'react'
import styles from "../DeliveryForm/DeliveryForm.module.scss"
import axios from 'axios'
import AppContext from '../../context'
import {Link} from "react-router-dom"


const DeliveryForm = () => {
    const {cartItems} = useContext(AppContext) 
    const [name, setName] = useState()
    const [city, setCity] = useState()
    const [phone, setPhone] = useState()
    const [adress, setAdress] = useState()

    const postData = async(obj)=>{
        try{
            await axios.post("https://62f615b0612c13062b45e6f7.mockapi.io/personData", obj)
        }
        catch(err){
            console.log(err.message)
        }
    }

    const getDataFromInput = (e) =>{
        e.preventDefault()
        const obj = {name, city, adress, phone, items:cartItems}
        console.log(obj)
        postData(obj)
        //Your order is accepted

    }

  return (
    <form onSubmit={getDataFromInput}>
        <div className={styles.inputs}>
            <div className={styles.input}>
                <p>Name</p>   
                <input placeholder="Enter your name..." onChange={(e)=>setName(e.target.value)}></input>
            </div>
            <div className={styles.input}>
                <p>City</p>   
                <input placeholder="Enter your city..." onChange={(e)=>setCity(e.target.value)}></input>
            </div>
            <div className={styles.input}>
                <p>Adress</p>   
                <input placeholder="Enter your adress..." onChange={(e)=>setAdress(e.target.value)}></input>
            </div>
            <div className={styles.input}>
                <p>Phone</p>   
                <input placeholder="Enter your phone..." onChange={(e)=>setPhone(e.target.value)}></input>
            </div>
            <Link to="/accept">
                <button className={styles.submit} type="submit">Submit</button>
            </Link>
            
        </div>
    </form>
    
  )
}

export default DeliveryForm