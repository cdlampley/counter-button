import * as React from "react";
import "./styles.css";

const { useState } = React;

export default function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <h1>Counter Time!</h1>
      <h2>Click the button to see what happens.</h2>
      <p>{counter}</p>
      <button
        onClick={() => {
          setCounter(counter + 1);
        }}
      >
        Click Here
      </button>
    </div>
  );
}
