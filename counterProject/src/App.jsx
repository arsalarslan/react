import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [counter, setCounter] = useState(5);

  //let counter = 5;

  const addValue = () => {
    console.log("value added", counter);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
    setCounter((prevCount) => prevCount + 1);
  };

  const remValue = () => {
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
    setCounter((prevCount) => prevCount - 1);
  };

  return (
    <>
      <h1>Chaye or code</h1>
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}> Add value </button>
      <br />
      <br />
      <button onClick={remValue}>Remove value </button>
    </>
  );
}

export default App;
