import React from 'react'

const Input = ({range, onHandleSetRange}) => {

    const setRangeVal = (e)=>
    {
    onHandleSetRange(Number(e.target.value));
        console.log(e.target.value);
    }
  return (
    <div className='input'>
          <form>
            
            <div className='form-inner-div-slider'>
            <p><span>Value: <output id="value">{range}</output></span></p>
                
            <input type="range" min="0" max="100" value = {range} onChange={setRangeVal}/> </div>

              <div className='form-inner-div'><input type="radio" name="choice" value="option1"/> <label> Spread Operator </label></div> 
              
            
              <div className='form-inner-div'><input type="radio" name="choice" value="option2"/> <label>From() Method</label></div>
              

              <div className='form-inner-div'><input type="radio" name="choice" value="option3" /><label> Fill() Method</label></div>

              <button type='submit'>submit</button>
              
  
      </form>
        </div>
  )
}

export default Input
