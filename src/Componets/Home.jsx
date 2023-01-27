import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';
import './Home.css'
import Header from './Header'
import './Header.css'

const Home = () => {
  const router = useNavigate();
  return (
    <div id="home">
      <Header />
      {/* <div><button onClick={()=>router("\products")}>Products</button></div> */}
      <div id="images">
        <div id="innerImages">
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Grocery</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Mobiles</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/c12afc017e6f24cb.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Fashion</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/69c6589653afdb9a.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Electronics</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/ab7e2b022a4587dd.jpg?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Home</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/0ff199d1bd27eb98.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Appliances</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/71050627a56b4693.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Travel</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/f15c02bfeb02d15d.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Top Offers</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/flap/128/128/image/dff3f7adcf3a90c6.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Beauty, Toys & More</button></div>
          </div>
          <div>
            <img src="https://rukminim1.flixcart.com/fk-p-flap/128/128/image/05d708653beff580.png?q=100" alt="img" />
            <div><button onClick={() => router("\products")}>Two Wheelers</button></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
