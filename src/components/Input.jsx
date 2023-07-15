import React from 'react'
import Attach from '../image/attach.png'
import imgInput from '../image/imgInput.png'

const Input = () => {
  return (
    <div className='inputContainer'>
      <input type="text" placeholder='Type something...' />
      <div className="send">
        <img src={Attach} alt="" />
        <input type="file" style={{display:"none"}} id='file' />
        <label htmlFor="file">
          <img src={imgInput} alt="" />
        </label>
        <button>Send</button>
      </div>
    </div>
  )
}

export default Input