import './App.css';
import 'macro-css';
import React from 'react'
import {useState, useEffect} from 'react'
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer'

function App() {
  const [isOpened, setIsOpened] = useState(false)
  const [items, setItems] = useState()
  const [cartItems, setCartItems] = useState([])

  const onOpenedCart = ()=>{
    setIsOpened(!isOpened)
    
  }
  
  const CheckItemInCard = (items, cartItems)=>{
    

  }

  const onAddToCart = (obj)=>{
    setCartItems((prev)=>[...prev, obj])
  }
  useEffect(()=>{
    fetch("https://62f615b0612c13062b45e6f7.mockapi.io/items")
    .then((res)=>{
      return res.json()
    }).
    then((json)=>{
      console.log(json)
      setItems(json)
    })
  },[])
  
  console.log(items)
  return (
    <div className="App">
      {isOpened ? <Drawer cartItems = {cartItems} onOpenedCart={onOpenedCart}/>:null}
      
      <Header onOpenedCart={onOpenedCart}/>
      <div className="content p-30">
        <div className="d-flex justify-between align-center">
          <h1>All T-shirts</h1>
          <div className="search-block d-flex">
            <img width={22} height={22} src="image/icons8-search-30.png" alt="Search"></img>
            <input placeholder="Seach" type="search"></input>

          </div>
        </div>
        
        <div className="d-flex flex-wrap">
          {items&&items.map((item,index)=>(
              <Card key={index} items={item} onAddToCart={(obj)=>onAddToCart(obj)}></Card>
          )
          )}
          
          
        </div>
        
        
      </div>
    
    </div>
  );
}

export default App;
