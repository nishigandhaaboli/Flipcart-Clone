import logo from './logo.svg';
import './App.css';
import{BrowserRouter, Routes, Route} from 'react-router-dom';
import Login from './Componets/Login';
import Home from './Componets/Home';
import Register from './Componets/Register';
import Products from './Componets/Products';
import Cart from './Componets/Cart';
import Wishlist from './Componets/Wishlist'

function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/products' element={<Products/>}/>
      <Route path='/cart' element={<Cart/>}/>
      <Route path='/wishlist' element={<Wishlist/>}/>

      {/* <Header/> */}
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
