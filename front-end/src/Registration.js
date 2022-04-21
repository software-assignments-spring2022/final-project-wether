import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './Registration.css'


const Registration = props => {
	const [username,setUsername] =useState('');
  const [password,setPassword] =useState('');
	
	  function register(e){
    if(username === '123' && password === '321'){
		axios
		.post(`http://localhost:3000/register/new`, {
			username: '123', 
			password: '321'
		})
		.catch(err => {
                console.log(err)
          })
      window.alert('Login success');
      
    }else{
      window.alert('Wrong username or password');
    }
  }

	return (
	  <div className="Registration">
      <h1>Registration</h1>
	  <h3>Don't have an account yet? Create one below!</h3>
	  <label htmlFor="username">Enter the username you would like to use: </label>
      <input type="text" id="username" value={username} onInput={e => setUsername(e.target.value)}/>
      <br/>
      <label htmlFor="password">Enter the password you would like to use: </label>
      <input type="text" id="password" value={password} onInput={e => setPassword(e.target.value)}/>
      <br/>
      <button id='login' onClick={register}>Register</button>
<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
		</div>
	);
}

export default Registration