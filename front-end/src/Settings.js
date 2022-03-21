import { Link } from 'react-router-dom'
import './Settings.css'

const Settings = props => {
  return (
    <div className="Settings">


      <select className='roundbox-selection'>
        <option value="F">Fahrenheit</option>
        <option value="C">Celsius</option>
      </select>
      <br/>
      
      
      <div className='roundbox'>
        <Link to="/login">Login</Link>
      </div>

      <br/>

      <div className='roundbox'><Link to="/about">About</Link></div>

      <br/>

      <div className='roundbox'><Link to="/help">Help</Link></div>
      
      <br/>
      <div className='roundbox'><Link to="/home">Back</Link></div>
      
    </div>
  );
}

export default Settings