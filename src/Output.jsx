import React from "react";
const Output = ({
  setDisplayOutput,
  setSelectedOption,
  setRange,
  range,
  selectedOption,
  displayOutput,
}) => {
  // compute numeric length safely
  const handleReset = () => {
    setDisplayOutput(false);
    setSelectedOption("option2");
    setRange(10);
  };
  const length = Number(range) || 0;

  // precompute code string (avoid side-effects during render)
  const optionsFromSpread =
    "[...Array(length).keys()].map((i) => `<option value=${i + 1}> ${i + 1}</option>` )";
  const optionsFromArrayFrom =
    "Array.from({ length },(_, index) => `<option value=${index + 1}> ${index + 1}</option>` )";

  return (
    <div className="output-container">
      {/* <h1>OUTPUT-BOX</h1> */}

      <div className="output-1">
        <label>List of Numbers:</label>
        <select id="select">
          {selectedOption === "option2"
            ? Array.from({ length }, (_, index) => (
                <option key={index} value={index + 1}>
                  {index + 1}
                </option>
              ))
            : selectedOption === "option1"
            ? [...Array(length).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))
            : null}
        </select>
      </div>

      <div className="output-2">
        <h1>
          Selected Option:{" "}
          {selectedOption === "option1"
            ? "Spread Method"
            : selectedOption === "option2"
            ? "From Method"
            : ""}
        </h1>
        <textarea
          rows="8"
          id="codeArea"
          value={
            selectedOption === "option1"
              ? optionsFromSpread
              : selectedOption === "option2"
              ? optionsFromArrayFrom
              : ""
          }
          readOnly
        />
      </div>

      <button type="reset" onClick={handleReset}>
        Reset
      </button>
    </div>
  );
};

export default Output;
