import { Link } from 'react-router-dom'
import "./Help.css"
const Help = props => {
  return (
    <div className="Help">
      <h1>Help</h1>
      <table>
        <tbody>
          <tr>
            <td>How to set celcius or farenheit?</td>
          </tr>
          <tr>
            <td>It's in settings!</td>
          </tr>
          <br/>
          <tr>
            <td>Where does the weather data come from?</td>
          </tr>
          <tr>
            <td>Weather API - TBD</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Help