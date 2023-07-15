import React from 'react'
import Ayano from '../image/Ayanokoji.png'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
        <img src={Ayano} alt="" />
        <span>Just Now</span>
      </div>
      <div className="messageContent">
        <p>Hello</p>
        <img src={Ayano} alt="" />
      </div>
    </div>
  )
}

export default Message