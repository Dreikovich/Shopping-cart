import React from 'react'
import Card from '../components/Card'

const Home = ({items,
    searchValue,
    onAddToCart,
    setSearchValue, onAddToFavorites}) => {
  return (
    <div className="content p-30">
        <div className="d-flex justify-between align-center">
          <h1>{searchValue? `Result of search: ${searchValue}`:"All T-shirts"}</h1>
          <div className="search-block d-flex">
            
            <img  width={22} height={22} src="image/icons8-search-30.png" alt="Search"></img>
            <input onChange={(e)=>setSearchValue(e.target.value)} value={searchValue || "" } placeholder="Seach"></input>
            {searchValue && <img className="clear cu-p" width={18} height={18} src="image/close.png" alt="Clear" onClick={()=>setSearchValue("")}></img>}

          </div>
        </div>
        
        <div className="d-flex flex-wrap">
          {items && items.filter(item=>item.description.toLowerCase().includes(searchValue.toLowerCase())).map((item,index)=>(
              <Card key={index} items={item} onAddToCart={(obj)=>onAddToCart(obj)} onAddToFavorites={(obj)=>onAddToFavorites(obj)}></Card>
          ))}
        </div>
      </div>
  )
}

export default Home