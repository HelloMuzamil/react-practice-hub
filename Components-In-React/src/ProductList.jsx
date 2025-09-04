import React from "react";
import Product from "./Product";

function ProductList(props) {
  return (
    <div>
      {props.items.map(function (product) {
        return (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
          />
        );
      })}
    </div>
  );
}

export default ProductList;
