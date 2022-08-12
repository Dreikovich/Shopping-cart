import './App.css';
import 'macro-css';
import React from 'react'
import axios from 'axios'
import {useState, useEffect} from 'react'
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer'
import Home from './pages/Home'
import { Routes, Route } from "react-router-dom";
import AppContext from "./context"
import Favorites from './pages/Favorites';

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [items, setItems] = useState()
  const [cartItems, setCartItems] = useState([])
  const [searchValue, setSearchValue] = useState("")
  const [favorites, setFavorites] = useState()

  const onOpenedCart = ()=>{
    setIsOpened(!isOpened)
    
  }

  const checkItemInCart = (obj)=>{
    if(cartItems.length===0 ){
      
      return false
    }
    else if(cartItems){
      let isExistInCart = false;
      cartItems.forEach(item=>{
        const {description, image, price} = item
        const object = {description, image, price}
        // console.log(JSON.stringify(item) === JSON.stringify(obj)) // it is not workin cause of id from asios mock api
        if(JSON.stringify(object) === JSON.stringify(obj)){
          isExistInCart = true
        } 
      })
      return isExistInCart;
    }
  }
  const onAddToCart = (obj)=>{
    
    if(!checkItemInCart(obj) ){
      axios.post("https://62f615b0612c13062b45e6f7.mockapi.io/cart", obj)
      setCartItems((prev)=>[...prev, obj])
    }
    // setCartItems((prev)=>[...prev, obj]) 
  }

  const onAddToFavorites = (obj)=>{
    axios.post("https://62f615b0612c13062b45e6f7.mockapi.io/favorites", obj)
    setFavorites((prev)=>[...prev, obj])
  } 

  const onDeleteItem = (id)=>{
      axios.delete(`https://62f615b0612c13062b45e6f7.mockapi.io/cart/${id}`)
      setCartItems((prev)=>prev.filter(item=>item.id!==id))
    
  }



  useEffect(()=>{
    // fetch("https://62f615b0612c13062b45e6f7.mockapi.io/items")
    // .then((res)=>{
    //   return res.json()
    // }).
    // then((json)=>{
    //   setItems(json)
    // })

    axios.get("https://62f615b0612c13062b45e6f7.mockapi.io/items").then((res)=>{
      setItems(res.data)
    })
    axios.get("https://62f615b0612c13062b45e6f7.mockapi.io/cart").then((res)=>{
      setCartItems(res.data)
    })
    axios.get("https://62f615b0612c13062b45e6f7.mockapi.io/favorites").then(res=>{
      setFavorites(res.data)
    })
  },[])
  
  return (
    <AppContext.Provider>
      <div className="App">
        {isOpened ? <Drawer cartItems = {cartItems} onOpenedCart={onOpenedCart}  onDeleteItem={onDeleteItem}/> :null}
        
        <Header onOpenedCart={onOpenedCart}/>
        <Routes>
          <Route path="/" element={<Home items={items} searchValue={searchValue} setSearchValue={setSearchValue} onAddToCart={onAddToCart} onAddToFavorites={onAddToFavorites}/>}>
            
          </Route>
          <Route path="/favorites" element={<Favorites favorites={favorites}/>}></Route>
        </Routes>
        
      </div>
    </AppContext.Provider>
    
  );
}

export default App;
