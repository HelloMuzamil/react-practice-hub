import { useState, useEffect } from "react";

const Practice = () => {
  const [count, setCount] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    console.log("Render First Time");
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((prev) => prev + 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [running]);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setRunning(true)}>Start</button>
      <button onClick={() => setRunning(false)}>Stop</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </div>
  );
};

export default Practice;
