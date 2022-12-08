import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { ProductsCard } from "./ProductsCard";

export const Home = () => {
 const [products, setProducts] = useState([])




useEffect(()=>{
  fetch("watch.json")
  .then((res)=> res.json())
  .then(data=> setProducts(data))
},[])


console.log(products)
  return (
    <>
      <Navbar />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
      {
  products.map((product)=>(
    <ProductsCard product={product}/>
  ))
}
      </div>





      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
      <div>hiiiiiiiii</div>
    </>
  );
};
