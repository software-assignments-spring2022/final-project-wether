import { Link } from 'react-router-dom'
import './Search.css'
import sunny from './icons/sunny.png'
import rain from './icons/rain.png'
import cloud from './icons/cloud.png'

const Search = props => {
  return (
    <div className="Search">
      <h1>Search</h1>
      <form>
        <input type="text" id="add"/>
        <button>Submit</button>
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