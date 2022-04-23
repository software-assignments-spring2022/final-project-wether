import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './Search.css'
import sunny from './icons/sunny.png'
import axios from 'axios'
//import rain from './icons/rain.png'
//import cloud from './icons/cloud.png'






const Search = props => {

  const [location, setlocation] = useState('')

  const searchlocation = (location, e) => {
    console.log(location);
    if (location){
      axios
      .post(`http://localhost:3000/search`,{
          key:location,
          state:'search for location'
      })
      .then(
        () => setlocation(''),
        console.log(location)
      )
  
    }
  }




  return (
    <div className="Search">
      <h1>Search</h1>
      <form>
      <input type='location' value={location} placeholder='search a location' onChange={(e) => setlocation(e.target.value)}/>
        <button onClick={(e) => searchlocation(location, e)}>Submit</button>
      </form>
      <table>
        <tbody>
          <tr>
            <td><img src={sunny} alt="img"></img></td>
            <td>New York</td>
            <td>72 F</td>
          </tr>
          <tr>
            <td><img src={sunny} alt="img"></img></td>
            <td>Chicago</td>
            <td>75 F</td>
          </tr>
          <tr>
            <td><img src={sunny} alt="img"></img></td>
            <td>Boston</td>
            <td>67 F</td>
          </tr>
        </tbody>
      </table>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Search