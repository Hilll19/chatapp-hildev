import React from 'react'
import Killua from '../image/killua.jpg'


const Search = () => {
  return (
    <div className='Search'>
      <div className="searchForm">
        <input type="text" />
      </div>
      <div className="userChat">
        <img src={Killua} alt="" />
        <div className="userChatInfo">
          <span>Brian</span>
        </div>
      </div>
    </div>

  )
}

export default Search