import React from "react";
import ProductItem from './components/ProductItem/ProductItem';
import { useSelector } from 'react-redux';

export default function App() {
  const products = useSelector(state => {
    return state;
  })
  return (
    <div>
      <div>
        {products.map((product, index) => {
          return <ProductItem
            key={index}
            img={product.img}
            name={product.name} 
            number={product.number} 
            pricing={product.pricing} /> 
        })}
      </div>
    </div>
  )
}



