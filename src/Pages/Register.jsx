import React from 'react'
import Add from "../image/label.png"

export const Register = () => {
  return (
    <div className='formcontainer'>
        <div className="formWrapper">
            <span className='logo'>Chat App</span>
            <span className='title'>Register</span>
            <form>
                <input type="text" placeholder='Display Name'/>
                <input type="email" placeholder='Email'/>
                <input type="password" placeholder='Password'/>
                <input style={{display:"none"}} type="file" id='file'/>
                <label htmlFor="file">
                  <img src={Add} alt="" />
                  <span>Add an Avatar</span>
                </label>
                <button>sign up</button>
            </form>
            <p>You do have an account ? Login</p>
        </div>
    </div>
  )
}
