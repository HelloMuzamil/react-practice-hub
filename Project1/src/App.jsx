import Card from "./component/Card";
 import { useState } from "react";

 



  // dummy data
  const data = [
    {
      id: 1,
      title: "Essence Mascara Lash Princess",
      description: "Popular mascara with volumizing effect.",
      price: 9.99,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp",
    },
    {
      id: 2,
      title: "Eyeshadow Palette with Mirror",
      description: "Versatile range of eyeshadow shades.",
      price: 19.99,
      thumbnail:
        "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp",
    },
  ];

function App() {
   const [text,settext]= useState("");
   const [filterss,filtersearch]=useState(data);


   
function handlebutton(e){
  settext(e.target.value)
    const filterdata=data.filter((item)=>{
     return item.title.toLowerCase().includes(text.toLowerCase());
    })
    console.log(filterdata)
    filtersearch(filterdata)
}
const filterdata=data.filter((item)=>{
     return item.title.toLowerCase().includes(text.toLowerCase());
    })
    console.log(filterdata)
 
  return (
    <>
     
      <div>
        <h1>{text}</h1>
        
        {/* input + button */}
        <input
          type="text"
          placeholder="Enter Something To Search"
          value={filterss}
          onChange={(e)=>{
            settext(e.target.value);
          }}
         
     
        />
       
        <button onClick={handlebutton} >Search</button>

        {/* cards */}

          {filterdata.map((item) => {
            return (
              <Card
                key={item.id}
                title={item.title}
                discription={item.description}
                thumbnail={item.thumbnail}
                price={item.price}
              />
            );
          })}
              
     
        </div>
 
    </>
  );
  

    
  }
 
  

export default App;
