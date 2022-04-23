//import { Link } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import './Registration.css'


const Registration = props => {
	const [username1,setUsername] =useState('');
  const [password1,setPassword] =useState('');
	
	  function register(e){
    if(username1 && password1){
		axios
		.post(`http://localhost:8080/register/new`, {
			username: username1, 
			password: password1
		})
		.catch(err => {
                console.log(err)
          })
      window.alert('able to register');
      
    }else{
      window.alert('cant register');
    }
  }

	return (
	  <div className="Registration">
      <h1>Registration</h1>
	  <h3>Don't have an account yet? Create one below!</h3>
	  <label htmlFor="username">Enter the username you would like to use: </label>
      <input type="text" id="username" value={username1} onInput={e => setUsername(e.target.value)}/>
      <br/>
      <label htmlFor="password">Enter the password you would like to use: </label>
      <input type="text" id="password" value={password1} onInput={e => setPassword(e.target.value)}/>
      <br/>
      <button id='login' onClick={register}>Register</button>
<p>If you click the "Submit" button, the form-data will be sent to a page called "/action_page.php".</p>
		</div>
	);
}

export default Registration