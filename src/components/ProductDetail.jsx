import React from 'react'
import { Link, useParams } from 'react-router-dom'
import products from "../../product.json";

const ProductDetail = () => {

    const {id} = useParams();
    const product = products.find((item)=>item.id === parseInt(id));

    if(!product){
        return <div>
            Product not found
        </div>;
    }

  return (
    <div>
      
      <p>{product.title}</p>
      <p>Price: {product.price}</p>
      
    </div>
  )
}

export default ProductDetail
