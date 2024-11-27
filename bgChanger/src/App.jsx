import { useState } from "react";

function App() {
  const [color, setColor] = useState("white");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="flex flex-wrap justify-center fixed bottom-11  inset-x-0 px-2 ">
        {" "}
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3  rounded-full">
          <button
            onClick={() => setColor("red")}
            className="outline-none px-3 py-1 text-white rounded-full"
            style={{ backgroundColor: "red" }}
          >
            red
          </button>
          <button
            onClick={() => setColor("green")}
            className="outline-none px-3 py-1 text-white rounded-full"
            style={{ backgroundColor: "green" }}
          >
            green
          </button>
          <button
            onClick={() => setColor("black")}
            className="outline-none px-3 py-1 text-white rounded-full"
            style={{ backgroundColor: "black" }}
          >
            black
          </button>
          <button
            onClick={() => setColor("blue")}
            className="outline-none px-3 py-1 text-white rounded-full"
            style={{ backgroundColor: "blue" }}
          >
            blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="outline-none px-3 py-1 text-white rounded-full"
            style={{ backgroundColor: "purple" }}
          >
            purple
          </button>
          <button
            onClick={() => setColor("maroon")}
            className="outline-none px-4 py-1 text-white rounded-full"
            style={{ backgroundColor: "maroon" }}
          >
            maroon
          </button>
          <button
            onClick={() => setColor("brown")}
            className="outline-none px-3 py-1 text-white rounded-full"
            style={{ backgroundColor: "brown" }}
          >
            brown
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
