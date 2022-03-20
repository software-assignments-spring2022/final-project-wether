import { Link } from 'react-router-dom'

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
            <td><img src=" " alt="img"></img></td>
            <td>Location</td>
            <td>Temperature</td>
          </tr>
          <tr>
            <td><img src=" " alt="img"></img></td>
            <td>Location</td>
            <td>Temperature</td>
          </tr>
          <tr>
            <td><img src=" " alt="img"></img></td>
            <td>Location</td>
            <td>Temperature</td>
          </tr>
        </tbody>
      </table>
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Search