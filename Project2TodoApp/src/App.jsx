import { useState } from "react";

function App() {
  // Ek todo object rakhenge (input ke liye)
  const [todo, setTodo] = useState({ todo: "", Desc: "" });

  // Ye list (array) rakhegi saare todos ko
  const [showtodo, setShowTodo] = useState([]);

  // Jab "Add Todo" button dabao
  function Submitbtn(e) {
    e.preventDefault();

    // Pichle array ke andar new todo ko push kar do (copy banake)
    setShowTodo((prev) => [...prev, todo]);

    // Input fields ko clear karna (optional)
    setTodo({ todo: "", Desc: "" });
  }

  // Delete karne ka function
  function handledel(i) {
    // copy banao warna original array mutate ho jayega
    const newTodos = [...showtodo];

    // splice se index wala item remove karo
    newTodos.splice(i, 1);

    // updated array ko state me set kar do
    setShowTodo(newTodos);
  }

  return (
    <>
      {/* Input for Todo */}
      <input
        type="text"
        placeholder="todo"
        value={todo.todo} // controlled input
        onChange={(e) =>
          setTodo((prev) => ({
            ...prev,
            todo: e.target.value,
          }))
        }
      />
      <br />

      {/* Input for Description */}
      <input
        type="text"
        placeholder="Desc"
        value={todo.Desc} // controlled input
        onChange={(e) =>
          setTodo((prev) => ({
            ...prev,
            Desc: e.target.value,
          }))
        }
      />
      <br />

      {/* Add Todo Button */}
      <button onClick={Submitbtn}>Add Todo</button>

      {/* List of todos */}
      {showtodo.map((item, i) => (
        <div key={i}>
          <h1>{item.todo}</h1>
          <p>{item.Desc}</p>
          {/* Delete Button */}
          <button onClick={() => handledel(i)}>Delete</button>
        </div>
      ))}
    </>
  );
}

export default App;
