import { Link } from 'react-router-dom'

const Home = props => {
  return (
    <div className="Home">
      <Link to="/search">Search</Link>
      <br/>
      <h1 className="Location">New York, NY</h1>
      <h1 className="Temperature">70 F</h1>
      <img className="Icon" src=" " alt="Weather Icon"/>
      <table className="Forecast">
        <tbody>
          <tr>
            <td>Sunday</td>
            <td>70 F</td>
          </tr>
          <tr>
            <td>Monday</td>
            <td>70 F</td>
          </tr>
          <tr>
            <td>Tuesday</td>
            <td>70 F</td>
          </tr>
          <tr>
            <td>Wednesday</td>
            <td>70 F</td>
          </tr>
          <tr>
            <td>Thursday</td>
            <td>70 F</td>
          </tr>
          <tr>
            <td>Friday</td>
            <td>70 F</td>
          </tr>
          <tr>
            <td>Saturday</td>
            <td>70 F</td>
          </tr>
        </tbody>
      </table>
      <hr/>
      <ul className="Comments">
        <Link to="/comments">Comments</Link>
        <br/>
        <Link to="/stories">Stories</Link>
        <li>Comment 1</li>
        <li>Comment 2</li>
        <li>Comment 3</li>
      </ul> 
      <Link to="/settings">Settings</Link>
    </div>
  );
}

export default Home