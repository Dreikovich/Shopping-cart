import React from 'react'
import {useState, useContext, useEffect} from 'react'
import styles from "../DeliveryForm/DeliveryForm.module.scss"
import styleItem from "../OrderItems/OrderItems.module.scss"
import axios from 'axios'
import AppContext from '../../context'
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";


const DeliveryForm = () => {
    let navigate = useNavigate();
    const {cartItems, setCartItems} = useContext(AppContext) 
    const initialState = {
        name:"",
        city:"",
        adress:"",
        phone:""
        
    }
    const [formValue, setFormValue] = useState(initialState)
    const [errorName, setErrorName] = useState(null)
    const [errorCity, setErrorCity] = useState(null)
    const [errorPhone, setErrorPhone] = useState(null)
    const [errorAdress, setErrorAdress] = useState(null)
    const {name, city, adress, phone} = formValue;
    const [sendForm, setSendForm] = useState(false)

    const delay = t => new Promise(resolve => setTimeout(resolve, t));
   
    const deleteAllCart = async()=>{
        let i = 0, len = cartItems.length;
        while (i < len) {
            const id = cartItems[i].id
            await axios.delete(`https://62f615b0612c13062b45e6f7.mockapi.io/cart/${id}`)
            await delay(3000)
            i++
        }
    }


    useEffect(() => {
        checkData()
    },[formValue])

    const postData = async(obj)=>{
        try{
            await axios.post("https://62f615b0612c13062b45e6f7.mockapi.io/personData", obj)
        }
        catch(err){
            console.log(err.message)
        }
    }

    const onNameChange =(e)=>{
        setErrorName(null)
        setFormValue({...formValue,name:e.target.value})
        
    }

    const onCityChange =(e)=>{
        setErrorCity(null)
        setFormValue({...formValue,city:e.target.value})
        
    }

    const onAdressChange =(e)=>{
        setErrorAdress(null)
        setFormValue({...formValue,adress:e.target.value})
        
    }
    const onPhoneChange =(e)=>{
        setErrorPhone(null)
        setFormValue({...formValue,phone:e.target.value})
        
    }

    const checkData=()=>{
        if(name && city && adress && phone){
            setSendForm(true)
        }
    }

    const getDataFromInput = (e) =>{
        e.preventDefault()
        
        
        // const {name, city, adress, phone} = formValue;
        const obj = {...formValue, items:cartItems}
        console.log(obj)
        
        if(!name){
            setErrorName(!null)
        }
        if(!city){
            setErrorCity(!null)
        }
        if(!adress){
            setErrorAdress(!null)
        }
        if(!phone){
            setErrorPhone(!null)
        }
        // console.log(errorName)
        // if(!errorName && !errorCity && !errorAdress && !errorPhone){
        if(name && city && adress && phone){
            postData(obj)
            setSendForm(true)
            deleteAllCart()
            setCartItems([])
            navigate('/accept')
    }
}
    
  return (
    <div>  
        {cartItems.length>0? <form onSubmit={getDataFromInput}>
        
        <div className={styles.inputs}>
            <div className={styles.input}>
                <p>Name</p>   
                {errorName!==null? <input name="name"  placeholder="Field name must not be null" onChange={onNameChange} style={{borderColor: "#FF0000"}}></input>:
                <input name="name" placeholder="Enter your name..." onChange={onNameChange}></input>
                }
            </div>
            <div className={styles.input}>
                <p>City</p>   
                {errorCity!==null?<input name="city" placeholder="Field city must not be null" onChange={onCityChange} style={{borderColor: "#FF0000"}}></input>:
                <input name="city" placeholder="Enter your city..." onChange={onCityChange}></input>
                }
            </div>
            <div className={styles.input}>
                <p>Adress</p>   
                {errorAdress!==null?
                <input name="adress" placeholder="Field adress must not be null" style={{borderColor: "#FF0000"}} onChange={onAdressChange}></input>:
                <input name="adress" placeholder="Enter your adress..."  onChange={onAdressChange}></input>
                }
            </div>
            <div className={styles.input}>
                <p>Phone</p>   
                {errorPhone!==null?
                <input name="phone" placeholder="Field phone must not be null" style={{borderColor: "#FF0000"}}  onChange={onPhoneChange}></input>:
                <input name="phone" placeholder="Enter your phone..."  onChange={onPhoneChange}></input>

                }
                
            </div>
                <button className={styles.submit} type="submit">
                    Submit
                </button>
            
        </div>
    </form>
    :
    <div className={styleItem.orderItems}> 
        <h2 className="ml-40">Nothing to order</h2> 
    </div>
    }
    
        
    </div>
    
    
    
  )
}

export default DeliveryForm