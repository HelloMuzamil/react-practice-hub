import { useState, useEffect } from "react";
import { fetchBio } from "./api.js";
import Practice from "./Practice.jsx";

function App() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState(null);

  // console.log("🔄 Render hua. Person =", person, "Bio =", bio);

  useEffect(() => {
    console.log("⚡ useEffect RUN for person =", person);
    setBio(null); // reset for loading
    fetchBio(person).then((result) => {
      console.log("✅ API Result aya:", result);
      setBio(result);
    });
  }, [person]);

  return (
    <>
      <h3>Selected Person: {person}</h3>
      <select value={person} onChange={(e) => setPerson(e.target.value)}>
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
      <Practice />;
    </>
  );
}

export default App;
