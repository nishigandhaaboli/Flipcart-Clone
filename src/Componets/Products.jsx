import axios from 'axios'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { toast } from 'react-hot-toast'
import {useNavigate } from 'react-router-dom'
import Header from './Header'
import './Products.css'

const Products = () => {
    const [movies,setMovies] = useState();
    const router = useNavigate();

    useEffect(()=>{
        async function gettingData(){
            const {data} = await axios.get("https://fakestoreapi.com/products");
            setMovies(data);
        }
        gettingData();
    },[])

    function addToCart(e){
      console.log(e)
      const productFromLocal = JSON.parse(localStorage.getItem("cartProducts"))||[];
      productFromLocal.push(e);
      localStorage.setItem("cartProducts",JSON.stringify(productFromLocal));
      toast.success("added to cart...")
    }

    function addToWishlist(e){
      const localStorageWishlist = JSON.parse(localStorage.getItem("wishlistProducts"))||[];
      localStorageWishlist.push(e);
      localStorage.setItem("wishlistProducts",JSON.stringify(localStorageWishlist));
      toast.success("Added to wishlist....")
    }
  return (
    <div id="main">
      <Header/>
      {/* <button onClick={()=>router('/cart')}>Cart</button> */}
      <div id="screen">
        <div id="leftnav"><h1>Filter</h1></div>
        <div id="rightprod">
            {movies && movies.map((e,i)=>(
            <div id="key" key={i}>
                <div id="proDiv">
                    <img src={e.image} alt="movie"/>
                    <div id="info">
                      <h2>Details</h2>
                      <h3>Title :{e.title}</h3>
                      <p><b>Price</b> :{e.price}</p>
                      <p><b>Category</b> :{e.category}</p>
                      <button onClick={()=>addToCart(e)}>Add To Cart</button>
                      <button onClick={()=>addToWishlist(e)}>Wishlist</button>
                    </div>
                </div>
            </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Products
