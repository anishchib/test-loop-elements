import React from "react";

const Input = ({
  setDisplayOutput,
  onHandleSetSelectedOption,
  selectedOption,
  range,
  onHandleSetRange,
}) => {
  const setRangeVal = (e) => {
    onHandleSetRange(Number(e.target.value));
    console.log(e.target.value);
  };

  const handleRadioInput = (e) => {
    onHandleSetSelectedOption(e.target.value);
  };
  const formProcessing = (evt) => {
    evt.preventDefault();
    setDisplayOutput(true);
  };

  return (
    <div className="input">
      <form onSubmit={formProcessing}>
        <div className="form-inner-div-slider">
          <p>
            <span>
              Value: <output id="value">{range}</output>
            </span>
          </p>
          <input
            type="range"
            min="0"
            max="100"
            value={range}
            onChange={setRangeVal}
          />{" "}
        </div>

        <div className="form-inner-div">
          <input
            type="radio"
            name="choice"
            value="option1"
            checked={selectedOption === "option1"}
            onChange={handleRadioInput}
          />
          <label> Spread Operator </label>
        </div>

        <div className="form-inner-div">
          <input
            type="radio"
            name="choice"
            value="option2"
            checked={selectedOption === "option2"}
            onChange={handleRadioInput}
          />
          <label>From() Method</label>
        </div>

        <div className="form-inner-div">
          <input
            type="radio"
            name="choice"
            value="option3"
            checked={selectedOption === "option3"}
            onChange={handleRadioInput}
          />
          <label> Fill() Method</label>
        </div>

        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default Input;
