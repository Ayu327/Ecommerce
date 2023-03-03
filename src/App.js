import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Navbar from './components/navbar';
import Shop from './pages/shop/shop';
import {Cart} from './pages/cart/cart';
import { ShopContextProvider } from './context/shop-context';
import {useState, useEffect} from "react";
import axios from 'axios'


function App() {
  const [Items, setItems] = useState([])

  useEffect(() =>{
    async function getAllProducts(){
    axios.request({
      url: 'https://api-ap-south-1.hygraph.com/v2/clejqb6cm0qb801up621rhvxw/master',
      method: "POST",
      data: {
        query: `{items{
          id
          name
          itemPrice
          asset
        }}`
      }
    }).then((res) => setItems(res.data.data.items))
    }
    getAllProducts()
  },[])
  return (
    <div className="App">
      <ShopContextProvider>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Shop items = {Items}/>}></Route>
          <Route path='/cart' element={<Cart/>}></Route>
          
        </Routes>
      </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;
