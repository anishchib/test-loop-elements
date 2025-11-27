import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Input from "./Input";
import Output from "./Output";

function App() {
  const [count, setCount] = useState(0);
  const [displayOutput, setDisplayOutput] = useState(false);
  const [range, setRange] = useState(10);
  const [selectedOption, setSelectedOption] = useState("option2");
  const [array, setArray] = useState([
    { maxVal: { range }, SelectedValue: { selectedOption } },
  ]);
  const handleSetRange = (val) => {
    setRange(val);
  };

  const handleSetSelectedOption = (val) => {
    setSelectedOption(val);
  };
  return (
    <>
      <div className="container">
        <Input
          setDisplayOutput={setDisplayOutput}
          selectedOption={selectedOption}
          range={range}
          onHandleSetRange={handleSetRange}
          onHandleSetSelectedOption={handleSetSelectedOption}
        />
        {displayOutput && (
          <Output
            setDisplayOutput={setDisplayOutput}
            setSelectedOption={setSelectedOption}
            setRange={setRange}
            range={range}
            selectedOption={selectedOption}
            displayOutput={displayOutput}
          />
        )}
      </div>
    </>
  );
}

export default App;
