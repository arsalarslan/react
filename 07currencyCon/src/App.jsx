import { useState } from "react";
import INPUTBOX from "./components/INPUTBOX";
import useCurrencyinfo from "./hooks/useCurrencyinf";

function App() {
  const [amount, setamount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("pkr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const currencyInfo = useCurrencyinfo(from);

  const option = Object.keys(currencyInfo);

  const swap = () => {
    setFrom(to);
    setTo(from);
    setamount(convertedAmount);
    setconvertedAmount(amount);
  };

  const convert = () => {
    setconvertedAmount(amount * currencyInfo[to]);
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/1762843/pexels-photo-1762843.jpeg')`,
      }}
    >
      <div className="w-full ml-[700px]">
        <div className="w-full max-w-md mx-auto border border-black rounded-lg p-5 backdrop-blur-sm bg-transprent">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <INPUTBOX
                label="From"
                amount={amount}
                currencyOptions={option}
                onCurrencyChange={(currency) => {
                  setamount(amount);
                }}
                selectCurrency={from}
                onAmountChange={(amount) => {
                  setamount(amount);
                }}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-black rounded-md bg-orange-800 font-bold text-black px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <INPUTBOX
                label="From"
                amount={convertedAmount}
                currencyOptions={option}
                onCurrencyChange={(currency) => {
                  setTo(currency);
                }}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-800 font-bold text-black px-4 py-3 rounded-lg border border-2 border-black"
            >
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
