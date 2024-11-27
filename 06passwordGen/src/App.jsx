import { useState, useCallback, useEffect, useRef } from "react";

function App() {
  const [lengthh, setLength] = useState(8);
  const [numberr, setNumber] = useState(false);
  const [charr, setChar] = useState(false);

  const [password, setpass] = useState("");

  //useRef hook

  const passRef = useRef(null);

  const passGen = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if (setNumber) str += "0123456789";
    if (setChar) str += "!@#$%^&*()_{}~`?";

    for (let i = 1; i <= lengthh; i++) {
      let char = Math.floor(Math.random() * str.length) + 1;
      pass += str.charAt(char);
    }

    setpass(pass);
  }, [lengthh, numberr, charr, setpass]);

  const copyPassword = useCallback(() => {
    passRef.current?.select();
    passRef.current?.setSelectionRange(0, 6);
    window.navigator.clipboard.writeText(password);
    // alert("password copy");
  }, [password]);

  useEffect(() => {
    passGen();
  }, [lengthh, numberr, charr, passGen]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-600 bg-gray-800">
      <h1 className=" text-orange-600 text-center my-4 ">Password Genrator</h1>

      <div className="flex shadow rounded-lg overflow-hidden mb-4 ">
        <input
          type="text"
          value={password}
          className="outline-none bg-black w-full py-1 px-3 "
          placeholder="password"
          readOnly
          ref={passRef}
        />
        <button
          onClick={copyPassword}
          className=" outline-none bg-orange-600 hover:bg-orange-400 text-white px-3 py-0.5 shrink-0"
        >
          Copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1 ">
          <input
            type="range"
            min={6}
            max={100}
            value={lengthh}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value);
            }}
          />
          <label>Length:{lengthh}</label>
        </div>
        <div className="flex items-center pag-x-1">
          <input
            type="checkbox"
            defaultChecked={numberr}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label>:Number</label>
        </div>
        <div className="flex items-center pag-x-1">
          <input
            type="checkbox"
            defaultChecked={charr}
            id="numberInput"
            onChange={() => {
              setNumber((prev) => !prev);
            }}
          />
          <label>:Character</label>
        </div>
      </div>
    </div>
  );
}

export default App;
