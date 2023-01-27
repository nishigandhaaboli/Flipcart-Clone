import React, { useState } from 'react'
import { useEffect } from 'react';

const wishlist = () => {
    const [wishlistProducts,setWishlistProducts] = useState();

    useEffect(()=>{
        const productFromLocalStorageWishlist = JSON.parse(localStorage.getItem("wishlistProducts"))
        setWishlistProducts(productFromLocalStorageWishlist);
    },[])

  return (
    <div>
      {wishlistProducts && wishlistProducts.map((e,i)=>(
        <div key={i}>
            <div id="proDiv">
                  <img src={e.image} alt="movie"/>
                  <div id="info">
                      <h2>Details</h2>
                      <h3>Title :{e.title}</h3>
                      <p><b>Price</b> :{e.price}</p>
                      <p><b>Category</b> :{e.category}</p>
                    </div>
            </div>
        </div>
      ))}
    </div>
  )
}

export default wishlist
