import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";




  const products = [
    { name: "Nike", price: 3500 },
    { name: "Adidas", price: 3500 },
    { name: "Golden Star", price: 3500 },
  ];

ReactDOM.createRoot(document.getElementById("root")).render(

    <App />
    
);

