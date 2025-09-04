import { useState } from "react";

function App() {
  const [data, setdata] = useState(0);
  console.log(data)
  
  const [error, seterror] = useState("");

  function increaseval() {
    setdata(data + 1);
    seterror(""); // error clear on increase
  }


  
  function decreaseval() {
    if (data < 1) {
      seterror("Not allowed Please");
    } else {
      setdata(data - 1);
      seterror("");
    }
  }


  return (
    <div>
      <h1>Counter</h1>
      <button onClick={increaseval}> Increase</button>
      <button onClick={decreaseval}> Decrease</button>

      <h1>{error}</h1>
      <h2>{data}</h2>
    </div>
  );
}

export default App;


//******************************************Without State***************************************

// function App() {
//   let data = 0;
//   let error = "";

//   function increaseval() {
//     data = data + 1;       // variable update ho raha hai
//     error = "";            // error reset
//     console.log("Increase:", data, error);
//   }

//   function decreaseval() {
//     if (data < 1) {
//       error = "Not allowed Please";
//     } else {
//       data = data - 1;
//       error = "";
//     }
//     console.log("Decrease:", data, error);
//   }

//   return (
//     <div>
//       <h1>Counter (Without State)</h1>
//       <button onClick={increaseval}>Increase</button>
//       <button onClick={decreaseval}>Decrease</button>

//       {/* UI me yeh static hi rahega */}
//       <h1>{error}</h1>
//       <h2>{data}</h2>
//     </div>
//   );
// }

// export default App;




// *******************************************TODO LIST*************************************************

// import { useState } from "react";

// function App() {
//   const [boxes, setBoxes] = useState([]);

//   function createDiv() {
//     setBoxes([...boxes, "New Div"]);
//   }

//   return (
//     <div>
//       <button onClick={createDiv}>Add Div</button>

//       {/* yaha boxes ko render karna hai */}
//       {boxes.map((box, index) => (
//         <div key={index} style={{ 
//           width: "100px", 
//           height: "100px", 
//           backgroundColor: "lightblue", 
//           margin: "10px"
//         }}>
         
//         </div>
//       ))}
//     </div>
//   );
// }

// export default App;
