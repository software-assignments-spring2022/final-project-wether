import { Link } from 'react-router-dom'
import "./About.css"
const About = props => {
  return (
    <div className="About">
      <h1>About Us</h1>
      <table>
        <tbody>
          <tr>
            <td>Dan Lu - dl4422</td>
            <td>Description: Sophomore in CS taking Agile Software Engineering, Algorithms, Operating Systems, and Web Development</td>
          </tr>
          <tr>
            <td>Hellen Ekpo - he560</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>Frank Fan - wf594</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>Brad Feng - bf2192</td>
            <td>Description</td>
          </tr>
          <tr>
            <td>Evan LeBanca- el2953</td>
            <td>Description</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default About