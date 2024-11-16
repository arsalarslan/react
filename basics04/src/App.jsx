import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1 className="bg-green-700 text-white font-bold p-4 rounded-xl ">
        DIL DIL PAKISTAN
      </h1>
      <br />
      <Card username="pakistans" />
      <Card username="arslam" btnText="click me" />
    </>
  );
}

export default App;
