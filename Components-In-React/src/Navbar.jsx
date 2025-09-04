import React from "react";

function Navbar() {
  return (
    <nav style={{
      backgroundColor: "black",
      padding: "10px",
      color: "white"
    }}>
      <ul style={{
        display: "flex",
        gap: "10px",
        listStyle: "none",
        margin: "0",
        padding: "0"
      }}>
        <li>Home</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar;
