import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ProductList from "./ProductList";

function App() {
  const products = [
    { id: 1, name: "Laptop", price: 1200 },
    { id: 2, name: "Mobile", price: 800 },
    { id: 3, name: "Headphones", price: 150 },
    { id: 4, name: "Keyboard", price: 50 },
  ];

  return (
    <div>
      {/* Navbar Section */}
      <Navbar />

      {/* Page Heading */}
      <h1 style={{ textAlign: "center", marginTop: "50px" }}>
        Welcome to My Website
      </h1>

      {/* Product List Rendering */}
      <ProductList items={products} />

      {/* Footer Section */}
      <Footer name="About us footer" />
    </div>
  );
}

export default App;

// /       {/* Product List Rendering using .map() */}
// //       {products.map((item, index) => (
// //         <Product
// //           key={index}       // unique key for each element
// //           name={item.name}
// //           price={item.price}
// //         />
// //       ))}
