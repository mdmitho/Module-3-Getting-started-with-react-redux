import React from 'react'

export const ProductsCard = ({product}) => {
    const { name, img, price, description,} = product;
  return (
    <>
    <div className="card  bg-base-100 shadow-xl">
  <figure><img src={img} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title my-3">NAME : {name}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end my-3">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    
    </>
  )
}
