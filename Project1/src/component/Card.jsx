import React from "react";

function Card({title,discription,thumbnail,price}) {
  return (
      <div>
      <img 
        src={thumbnail} alt={title}
      />
      <h2>{title}</h2>
      <h3>{discription}</h3>
      <p>{price}</p>
      </div>
  );
}

export default Card;
