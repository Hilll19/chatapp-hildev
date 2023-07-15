import React from 'react'
import Killua from '../image/killua.jpg'

const Chats = () => {
  return (
    <div className='chats'>
      <div className="userChat">
        <img src={Killua} alt="" />
        <div className="userChatInfo">
          <span>Brian</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Killua} alt="" />
        <div className="userChatInfo">
          <span>Brian</span>
          <p>Hello</p>
        </div>
      </div>
      <div className="userChat">
        <img src={Killua} alt="" />
        <div className="userChatInfo">
          <span>Brian</span>
          <p>Hello</p>
        </div>
      </div>
    </div>
  )
}

export default Chats