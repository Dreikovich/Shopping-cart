import React from 'react'
import {useState, useContext, useEffect} from 'react'
import styles from "../DeliveryForm/DeliveryForm.module.scss"
import axios from 'axios'
import AppContext from '../../context'
import {Link} from "react-router-dom"


const DeliveryForm = () => {

    

    const {cartItems} = useContext(AppContext) 
    // const [name, setName] = useState("")
    // const [city, setCity] = useState("")
    // const [adress, setAdress] = useState("")
    // const [phone, setPhone] = useState("")
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
    }
}
    
  return (
    
    <form onSubmit={getDataFromInput}>
        
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
                {
                    console.log(sendForm)
                }
            {
                
                sendForm===true?
                <Link to="/accept">
                    <button className={styles.submit} type="submit">
                        Submit
                    </button>
                </Link>:
                <button className={styles.submit} type="submit">
                    Submit
                </button>
            }   
        </div>
    </form>
    
  )
}

export default DeliveryForm