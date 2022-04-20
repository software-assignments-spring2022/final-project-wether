import { Link } from 'react-router-dom';
import "./Help.css"
//import { useHistory } from "react-router-dom";
const Help = props => {

  return (
    <div className="Help">
      <h1>Help</h1>
	  <h3>Frequently Asked Questions</h3>
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
	  	  <br/>
	  	  <tr>
            <td>What is this application used for?</td>
          </tr>
          <tr>
            <td>This application is used to check the weather in various location. It also allows users to have more detailed information about the weather so that users can be more throughly prepared for the weather in that specific location.</td>
          </tr>
	  	  <br/>
	  	  <tr>
            <td>How do I search for weather in a new location?</td>
          </tr>
          <tr>
            <td>You can do that in the settings!</td>
          </tr><br/>
	  	  <tr>
            <td>How do I add a new comment to a location?</td>
          </tr>
          <tr>
            <td>You can do that on the Home page!</td>
          </tr>
	  	  <br/>
	  	  <tr>
            <td>How do I delete a weather location?</td>
          </tr>
          <tr>
            <td>You can do that in the settings!</td>
          </tr>
        </tbody>
      </table>
	  <h1>If you have questions about any more information, please access the About page to contact the creators</h1>
	  <a HREF="history.go(-1)">Click here to go back to previous page</a>
	  <button onclick="history.back()">Go Back</button>
	  <div className='roundbox_1'><Link to="/settings">Back</Link></div>
    </div>

  );
}

export default Help