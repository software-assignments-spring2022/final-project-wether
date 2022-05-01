import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
//import { useState, useEffect } from 'react'
//import axios from 'axios'
import search from './icons/search.png'
import setting from './icons/setting.png'
import story from './icons/story.png'
import './Home.css'
import axios from 'axios'
import sunny from './icons/sunny.png'
import rain from './icons/rain.png'
import cloud from './icons/cloud.png'
const wether = {
  'sunny':sunny,
  'rain':rain,
  'cloud':cloud,
}









//let username = ""

const Home = props => {
  const [location, setlocation] = useState('')
  const [name,setname] = useState('');
  const [tempF,setTempF]= useState('');
  const [tempC,setTempC]= useState('');
  const [days,setDays] = useState('');
  const [Icons,setIcons] = useState('');
  const wethericonURL = './icons/';
  useEffect(() => {
    axios
    .get(`http://localhost:8080/search`,{
      params:{
        loc:"New York"
      }
    })
    .then(res=> {
      //console.log(res)
      setname(res.data.name)
      setTempF(res.data.F[0])
      setTempC(res.data.C[0])
      setDays(res.data.days[0])
      setIcons(res.data.Icon[0])
    })
  }, []);
  
  const searchlocation = (location, e) => {
    //console.log(location);
    axios
    .get(`http://localhost:8080/search`,{
      params:{
        loc:location
      }
    })
    .then(res=> {
      //console.log(res)
      setname(res.data.name)
      setTempF(res.data.F[0])
      setTempC(res.data.C[0])
      setDays(res.data.days[0])
      setIcons(res.data.Icon[0])
    })
    .catch(error=>{
      window.alert("invalid location")
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
    <div className="Home">
      
      
    <div className="SearchIcon">
    <input type='location' value={location} placeholder='search a location' onChange={(e) => setlocation(e.target.value)}/>
        <button onClick={(e) => searchlocation(location, e)}>Submit</button>    
      {/*<Link to="/search" >
        <img src={search} alt="search"></img>
  </Link>*/}
    </div> 
 

      <br/>
      <div className='Location'>   
        <h1>{name}</h1>   
      </div>
      <div className='currentLocation'>
        <div className='Temperature'>
          <h1> {temp.today}{tempSign}</h1>  
        </div>
        <div className='Icon'>
          <img src={wether[Icons.today]} alt="Weather Icon"/>
        </div>
      </div>
      
      <div className="Forecast">
        <div className="slide-item">
            <h3>{days.day1}</h3>
            <h3> {temp.day1} {tempSign}</h3>
            <img className= 'Forecast-weather-icon' src={wether[Icons.day1]} alt = "Forecast-weather" ></img>
        </div>
        <div className="slide-item">
            <h3>{days.day2}</h3>
            <h3> {temp.day2} {tempSign}</h3>
            <img className= 'Forecast-weather-icon' src={wether[Icons.day2]} alt = "Forecast-weather" ></img>
        </div>
        <div className="slide-item">
            <h3>{days.day3}</h3>
            <h3> {temp.day3} {tempSign}</h3>
            <img className= 'Forecast-weather-icon' src={wether[Icons.day3]} alt = "Forecast-weather" ></img>
        </div>
        <div className="slide-item">
            <h3>{days.day4}</h3>
            <h3> {temp.day4} {tempSign}</h3>
            <img className= 'Forecast-weather-icon' src={wether[Icons.day4]} alt = "Forecast-weather" ></img>
        </div>
        <div className="slide-item">
            <h3>{days.day5}</h3>
            <h3> {temp.day5} {tempSign}</h3>
            <img className= 'Forecast-weather-icon' src={wether[Icons.day5]} alt = "Forecast-weather" ></img>
        </div>
        <div className="slide-item">
            <h3>{days.day6}</h3>
            <h3> {temp.day6} {tempSign}</h3>
            <img className= 'Forecast-weather-icon' src={wether[Icons.day6]} alt = "Forecast-weather" ></img>
        </div>

      </div>
      
      <hr/>

      <div className="Comments">
        <Link to="/comments">
          <p>Read comments...</p>
        </Link>
        <br/>

          <Link to="/stories" className='Story'>
            <img src={story} alt='storyIcon'></img>
          </Link>
      </div> 




      
      <div className='settings'>
        <Link to="/settings">
          <img src={setting} alt='setting'></img>
        </Link>
      </div>
      
    </div>
  );
}

export default Home