import React from 'react'

const Input = () => {
  return (
    <div className='sub'>
          <form>
            
            <div className='form-inner-div-slider'>
            <p><span>Value: <output id="value"></output></span></p>
                
            <input type="range" min="0" max="100" /> </div>

              <div className='form-inner-div'><input type="radio" name="choice" value="option1"/> <label> Spread Operator </label></div> 
              
            
              <div className='form-inner-div'><input type="radio" name="choice" value="option2"/> <label>From() Method</label></div>
              

              <div className='form-inner-div'><input type="radio" name="choice" value="option3" /><label> Fill() Method</label></div>

              <button type='submit'>submit</button>
              
  
      </form>
        </div>
  )
}

export default Input
