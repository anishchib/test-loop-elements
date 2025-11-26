import React from 'react'

const Output = () => {
  return (
     <div className='sub'> <h1>OUTPUT-BOX</h1>
     <label for="fruits">List of Numbers:</label>
<select id="fruits" name="fruits">
  <option value="apple">Apple</option>
  <option value="banana">Banana</option>
  <option value="orange">Orange</option>
</select>
     </div>
  )
}

export default Output
