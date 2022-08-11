import './App.css';
import 'macro-css';
import Card from './components/Card'
import Header from './components/Header';
import Drawer from './components/Drawer'

function App() {
  return (
    <div className="App">
      <Drawer />
      



      <Header />
      <div className="content p-30">
        <div className="d-flex justify-between align-center">
          <h1>All T-shirts</h1>
          <div className="search-block d-flex">
            <img width={22} height={22} src="image/icons8-search-30.png" alt="Search"></img>
            <input placeholder="Seach" type="search"></input>

          </div>
        </div>
        
        <div className="d-flex ">
          <Card></Card>
          
        </div>
        
        
      </div>
    
    </div>
  );
}

export default App;
