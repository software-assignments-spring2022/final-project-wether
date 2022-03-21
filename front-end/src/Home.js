import { Link } from 'react-router-dom'
import sunny from './icons/sunny.png'
import rain from './icons/rain.png'
import cloud from './icons/cloud.png'




import search from './icons/search.png'
import setting from './icons/setting.png'
import story from './icons/story.png'
import './Home.css'

const Home = props => {
  return (
    <div className="Home">
      
      
    <div className="SearchIcon">     
      <Link to="/search" >
        <img src={search} alt="search"></img>
      </Link>
    </div>
 

      <br/>
      <div className='Location'>
        <h1>New York, NY</h1>
      </div>
      <div className='currentLocation'>
        <div className='Temperature'>
          <h1>70 F</h1> 
        </div>
        <div className='Icon'>
          <img src={sunny} alt="Weather Icon"/>
        </div>
      </div>
      
      <div className="Forecast">
        <div class="slide-item">
            <h3>Sunday</h3>
            <h3> 72 F</h3>
            <img className= 'Forecast-weather-icon' src={cloud} alt = "Forecast-weather" ></img>
        </div>
        <div class="slide-item">
            <h3>Monday</h3>
            <h3> 72 F</h3>
            <img className= 'Forecast-weather-icon' src={rain} alt = "Forecast-weather" ></img>
        </div>
        <div class="slide-item">
            <h3>Tuesday</h3>
            <h3> 72 F</h3>
            <img className= 'Forecast-weather-icon' src={sunny} alt = "Forecast-weather" ></img>
        </div>
        <div class="slide-item">
            <h3>Wednesday</h3>
            <h3> 72 F</h3>
            <img className= 'Forecast-weather-icon' src={cloud} alt = "Forecast-weather" ></img>
        </div>
        <div class="slide-item">
            <h3>Thursday</h3>
            <h3> 72 F</h3>
            <img className= 'Forecast-weather-icon' src={sunny} alt = "Forecast-weather" ></img>
        </div>
        <div class="slide-item">
            <h3>Friday</h3>
            <h3> 72 F</h3>
            <img className= 'Forecast-weather-icon' src={sunny} alt = "Forecast-weather" ></img>
        </div>

        <div class="slide-item">
            <h3>Saturday</h3>
            <h3> 72 F</h3>
            <img className= 'Forecast-weather-icon' src={cloud} alt = "Forecast-weather" ></img>
        </div>
      </div>
      
      <hr/>

      <div className="Comments">
        <Link to="/comments">
        <li>Comment 1</li>
        <li>Comment 2</li>
        <li>Comment 3</li>
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