import { Link } from 'react-router-dom'
import { useState } from 'react'
import Comment from './Comment'

let cmtCnt = 0

const Comments = props => {
  const [list, setList] = useState([])
  const [content, setContent] = useState('')

  const addComment = (content, e) => {
    e.preventDefault()
    const newCmt = new Object()
    console.log(cmtCnt)
    newCmt.content = content
    newCmt.id = cmtCnt++
    setList([...list, newCmt])
  }

  return (
    <div className="Home">
      <h1>Comments</h1>
      <ul>
        {list.map(cmt => {
          return (
            <li key={cmt.id}>
              <Comment content={cmt.content}/>
            </li>
          )
        })}
      </ul> 
      <form>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)}/>
        <button onClick={(e) => addComment(content, e)}>Submit</button>
      </form>
      <Link to="/login">Login</Link>
    </div>
  );
}

export default Comments