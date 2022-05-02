import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import sunny from './icons/sunny.png'
import './Search.css'
import axios from 'axios'






const Search = props => {
  const [location, setlocation] = useState('')
  const [name,setname] = useState('');
  const [tempF,setTempF]= useState('');
  const [tempC,setTempC]= useState('');
  const [days,setDays] = useState('');

  useEffect(() => {
    axios
    .get(`http://localhost:8080/search`,{
      params:{
        loc:"New York"
      }
    })
    .then(res=> {
      console.log(res)
      setname(res.data.name)
      setTempF(res.data.F[0])
      setTempC(res.data.C[0])
      setDays(res.data.days[0])
    })
  }, []);
  const searchlocation = (location, e) => {
    console.log(location);
    axios
    .get(`http://localhost:8080/search`,{
      params:{
        loc:location
      }
    })
    .then(res=> {
      console.log(res)
      setname(res.data.name)
      setTempF(res.data.F[0])
      setTempC(res.data.C[0])
      setDays(res.data.days[0])
    })
    .catch(err=>{
      window.alert("Invalid location")
    })

  }
  let tempSign = localStorage.getItem("tempSign");
  let temp = tempF;
  if(tempSign == null){
    tempSign = 'F';
    localStorage.setItem("tempSign","F");
  }else if(tempSign === "C"){
    temp = tempC;
  }

  
  return (
    <div className="Search">
      <h1>Search</h1>
      
      <input type='location' value={location} placeholder='search a location' onChange={(e) => setlocation(e.target.value)}/>
        <button onClick={(e) => searchlocation(location, e)}>Submit</button>
    
      <table>
        <tbody>
          <tr>
            <td><img src={sunny} alt="img"></img></td>
            <td>{name}</td>
            <td>{temp.today} {tempSign}</td>
          </tr>
        </tbody>
      </table>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Search