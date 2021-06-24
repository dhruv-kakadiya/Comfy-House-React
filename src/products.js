import React from 'react';
import Product from './product';
import { useGlobalContext } from './context';

function Products() {
  
  const { data } = useGlobalContext();
  return (
    <>
      <section className="products">
        <div className="title">our products</div>
        <div className="product-container">

          {data.map((item) => {
            return <Product key={item.id} {...item} />
          })}

        </div>
      </section>
    </>
  );
}

export default Products;