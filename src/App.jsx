import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {Navbar} from "./component/navbar";
import { Shop } from "./pages/shop/shop";
import { Cart } from "./pages/cart/cart";
import { Contact } from "./pages/contact";
import { ShopContextProvider } from "./context/shop-context";



function App(){
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <Navbar />
          <Routes>
             <Route path="/" element={<Shop />} />
             <Route path="/contact" element = {<Contact />}/>
             <Route path="/cart" element={<Cart />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}



export default App
