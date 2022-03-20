import { Link } from 'react-router-dom'

const Settings = props => {
  return (
    <div className="Settings">
      <select>
        <option value="F">Fahrenheit</option>
        <option value="C">Celsius</option>
      </select>
      <br/>
      <Link to="/login">Login</Link>
      <br/>
      <Link to="/about">About</Link>
      <br/>
      <Link to="/help">Help</Link>
    </div>
  );
}

export default Settings