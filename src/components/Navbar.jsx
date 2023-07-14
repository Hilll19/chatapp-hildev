import React from 'react'
import Killua from '../image/killua.jpg'

const Navbar = () => {
  return (
    <div className='navbar'>
      <span className='logo'>Chat App</span>
      <div className="user">
        <img src={Killua} alt="" />
        <span>Hilmy</span>
        <button>log out</button>
      </div>
    </div>
  )
}

export default Navbar