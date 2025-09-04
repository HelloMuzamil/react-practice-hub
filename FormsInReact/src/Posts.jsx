import React, { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]); // fetched data
  const [loading, setLoading] = useState(true); // loading flag
  const [error, setError] = useState(null); // error flag

  useEffect(() => {
    // Step 1: Controller for safe cleanup
    const controller = new AbortController();

    // Step 2: Start loading
    setLoading(true);

    // Step 3: Fetch dummy data
    fetch("https://jsonplaceholder.typicode.com/posts", {
      signal: controller.signal,
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        return res.json();
      })
      .then((data) => {
        setPosts(data.slice(0, 5)); // sirf 5 posts show
        setError(null);
      })
      .catch((err) => {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });

    // Step 4: Cleanup -> if component unmounts, abort fetch
    return () => controller.abort();
  }, []); // [] -> run only once after mount

  // UI Rendering
  if (loading) return <p>Loading...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>Dummy Posts</h2>
      <ul>
        {posts.map((p) => (
          <li key={p.id}>
            <strong>{p.title}</strong>
            <br />
            {p.body}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
