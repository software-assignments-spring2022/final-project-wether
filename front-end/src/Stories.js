import { Link } from 'react-router-dom'
import { useState } from 'react'

const Stories = props => {
  const [table, setTable] = useState(['Username', 'Date-Posted', 'Rating', 'Story']);
  const [story, setStory] = useState('');
  const addStory = (story, e) => {
    e.preventDefault();
    setTable([...table, story]);
  }
  return (
    <div className="Home">
      <h1>Stories</h1>
      <table>
        <tbody>
          {table.map((item, index) => {
            return <tr key={index}><td key={index}>{item}</td></tr>
          })}
        </tbody>
      </table> 
      <form>
        <input type="text" value={story} onChange={(e) => setStory(e.target.value)}/>
        <button onClick={(e) => addStory(story, e)}>Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Stories