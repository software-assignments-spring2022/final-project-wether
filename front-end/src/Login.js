//import { Link } from 'react-router-dom'
import { useState } from 'react'
import './Login.css'
import axios from 'axios'

const Login = props => {
  const [username,setUsername] =useState('');
  const [password,setPassword] =useState('');
	

  function signin(e){
    if(username && password ){
	  axios
	  .get(`http://localhost:3000/listusers`)
	  .then(response => {
		  const users_list = response.data.userlist;
		  console.log(users_list);
		  for (let i = 0; i < users_list.length; ++i) {
			  if (users_list[i].username == username) {
				  if (users_list[i].password == password) {
					  window.alert('Login success');
				  }
				  else {
					  window.alert('Wrong password');
				  }
			  }
		  }
		  
	  })
      
    }else{
      window.alert('Wrong username or password');
    }
  }

	
  function registration() {
	  window.location.replace("./Registration")
  }

  return (
    <div className="Login">
      <h1>Login</h1>
      <label htmlFor="username">Username: </label>
      <input type="text" id="username" value={username} onInput={e => setUsername(e.target.value)}/>
      <br/>
      <label htmlFor="password">Password: </label>
      <input type="text" id="password" value={password} onInput={e => setPassword(e.target.value)}/>
      <br/>
      <button id='login' onClick={signin}>Sign in</button>
      <h3>Don't have an account yet? Create one below!</h3>
      <button id='login' onClick={registration}>Register!</button>
      {/* <br/>
      <button>Login with Google</button> */}
    </div>
  );
}

export default Login