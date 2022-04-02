import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Login.css'

const Login = props => {
  return (
    <div className="Login">
      <h1>Login</h1>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username"/>
      <br/>
      <label htmlFor="password">Password: </label>
      <input type="text" id="password"/>
      {/* <br/>
      <button>Login with Google</button> */}
    </div>
  );
}

export default Login