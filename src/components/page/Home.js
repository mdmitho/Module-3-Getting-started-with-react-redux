import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";
import { ProductsCard } from "./ProductsCard";

export const Home = () => {
 const [products, setProducts] = useState([])




useEffect(()=>{
  fetch("watch.json")
  .then((res)=> res.json())
  .then(data=> setProducts(data))
},[])

const state = useSelector((state)=>state)


// console.log(state)
  return (
    <>
      <Navbar />

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 m-5 justify-center">
      {
  products.map((product)=>(
    <ProductsCard key={product.id} product={product}/>
  ))
}
      </div>
    </>
  );
};
