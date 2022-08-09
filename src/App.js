import './App.css';
import 'macro-css';


function App() {
  return (
    <div className="App">
      <header className="p-40">
        <div className="headerLeft">
          <img width={64} height={64} src ="image\icons8-grocery-store-96.png"></img>
          <div className="headerLeftInfo">
            <h3>React T-shirt</h3>
            <p>T-shirt online store</p>
          </div>
        </div>
        
        <ul className="headerRight">
          <li>
            <img width={20} height={20}src='image/shopping-cart.png'>
            </img>
            <span>1000$</span>
          </li>
          <li>
            <img src ="image/user.png" width={20} height={20}>
            </img>
          </li>
        </ul>
      </header>
      <div className="content p-40">
        <h1>All T-shirts</h1>
        <div className="d-flex ">
          <div className="card ">
              <img width={156} height={156}src="image/Lovepik_com-450079562-Be Creative T-shirt Design - Creative T-shirt Design - Motivatio.png"></img>
              <h5>Regular-fit t-shirt for men</h5>
              <div className="d-flex justify-between align-center">
                <div className="cost d-flex flex-column ">
                  <span>Price:</span>
                  <b>10$</b>
                </div>
                <button>
                  <img width={20} height={20} src="image/plus.png">
                  </img>
                </button>
              </div>
          </div>
          <div className="card">
              <img width={156} height={156}src="image/kisspng-printed-t-shirt-polo-shirt-clothing-red-t-shirt-5b25be5dd3d570.0055060815292002218677.png"></img>
              <h5>Regular-fit t-shirt for men</h5>
              <div className="d-flex justify-between align-center">
                <div className="cost d-flex flex-column ">
                  <span>Price:</span>
                  <b>10$</b>
                </div>
                <button>
                  <img width={20} height={20} src="image/plus.png">
                  </img>
                </button>
              </div>
          </div>
          <div className="card">
              <img width={156} height={156}src="image/Lovepik_com-450079562-Be Creative T-shirt Design - Creative T-shirt Design - Motivatio.png"></img>
              <h5>Regular-fit t-shirt for men</h5>
              <div className="d-flex justify-between align-center">
                <div className="cost d-flex flex-column ">
                  <span>Price:</span>
                  <b>10$</b>
                </div>
                <button>
                  <img width={20} height={20} src="image/plus.png">
                  </img>
                </button>
              </div>
          </div>
          <div className="card">
              <img width={156} height={156}src="image/Lovepik_com-450079562-Be Creative T-shirt Design - Creative T-shirt Design - Motivatio.png"></img>
              <h5>Regular-fit t-shirt for men</h5>
              <div className="d-flex justify-between align-center">
                <div className="cost d-flex flex-column ">
                  <span>Price:</span>
                  <b>10$</b>
                </div>
                <button>
                  <img width={20} height={20} src="image/plus.png">
                  </img>
                </button>
              </div>
          </div>
        </div>
        
        
      </div>
    
    </div>
  );
}

export default App;
