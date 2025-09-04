import React from "react";

function Footer({ name }) {
  return (
    <footer style={{
      backgroundColor: "#333",
      color: "white",
      textAlign: "center",
      padding: "10px",
      position: "fixed",
      bottom: 0,
      width: "100%"
    }}>
      <h1>{name}</h1>
    </footer>
  );
}

export default Footer;
