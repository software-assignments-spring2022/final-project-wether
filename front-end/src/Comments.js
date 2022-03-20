import { Link } from 'react-router-dom'
import { useState } from 'react'

const Comments = props => {
  const [table, setTable] = useState(['Username', 'Date-Posted', 'Rating', 'Comment']);
  const [comment, setComment] = useState('');
  const addComment = (comment, e) => {
    e.preventDefault();
    setTable([...table, comment]);
  }
  return (
    <div className="Home">
      <h1>Comments</h1>
      <table>
        <tbody>
          {table.map((item, index) => {
            return <tr key={index}><td key={index}>{item}</td></tr>
          })}
        </tbody>
      </table> 
      <form>
        <input type="text" value={comment} onChange={(e) => setComment(e.target.value)}/>
        <button onClick={(e) => addComment(comment, e)}>Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Comments