import { Link } from 'react-router-dom'
import { useState } from 'react'

const Login = props => {
  return (
    <div className="Home">
      <h1>Login</h1>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username"/>
      <br/>
      <label htmlFor="password">Password: </label>
      <input type="text" id="password"/>
      <br/>
      <button>Login with Google</button>
    </div>
  );
}

export default Login