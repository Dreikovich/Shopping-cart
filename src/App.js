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
  const [searchValue, setSearchValue] = useState("")

  const onOpenedCart = ()=>{
    setIsOpened(!isOpened)
    
  }

  
  
  const checkItemInCart = (obj)=>{
    console.log(obj)
    if(cartItems.length===0 ){
      return false
    }
    else if(cartItems){
      let isExistInCart = false;
      cartItems.forEach(item=>{
        console.log(JSON.stringify(item) === JSON.stringify(obj))
        if(JSON.stringify(item) === JSON.stringify(obj)){
          isExistInCart =true
        } 
      })
      return isExistInCart;
    }
  }

  const onAddToCart = (obj)=>{
    console.log(cartItems)
    if(!checkItemInCart(obj)){
      setCartItems((prev)=>[...prev, obj])
    }
    // setCartItems((prev)=>[...prev, obj])
    
  }
  useEffect(()=>{
    fetch("https://62f615b0612c13062b45e6f7.mockapi.io/items")
    .then((res)=>{
      return res.json()
    }).
    then((json)=>{
      setItems(json)
    })
  },[])
  
  return (
    <div className="App">
      {isOpened ? <Drawer cartItems = {cartItems} onOpenedCart={onOpenedCart}  /> :null}
      
      <Header onOpenedCart={onOpenedCart}/>
      <div className="content p-30">
        <div className="d-flex justify-between align-center">
          <h1>{searchValue? `Result of search: ${searchValue}`:"All T-shirts"}</h1>
          <div className="search-block d-flex">
            
            <img width={22} height={22} src="image/icons8-search-30.png" alt="Search"></img>
            <input onChange={(e)=>setSearchValue(e.target.value)} value={searchValue || "" } placeholder="Seach"></input>
            {searchValue && <img className="clear cu-p" width={18} height={18} src="image/close.png" alt="Clear" onClick={()=>setSearchValue("")}></img>}

          </div>
        </div>
        
        <div className="d-flex flex-wrap">
          {items && items.filter(item=>item.description.toLowerCase().includes(searchValue.toLowerCase())).map((item,index)=>(
              <Card key={index} items={item} onAddToCart={(obj)=>onAddToCart(obj)}></Card>
          )
          )}
          
          
        </div>
        
        
      </div>
    
    </div>
  );
}

export default App;
