import React from 'react'
import Add from "../image/label.png"

export const Login = () => {
  return (
    <div className='formcontainer'>
        <div className="formWrapper">
            <span className='logo'>Chat App</span>
            <span className='title'>Login</span>
            <form>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <button>sign in</button>
            </form>
            <p>You don't have an account ? Register</p>
        </div>
    </div>
  )
}
