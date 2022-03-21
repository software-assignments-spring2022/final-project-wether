import { Link } from 'react-router-dom'
import { useState } from 'react'
import Comment from './Comment'
import './Comments.css'

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

    setContent('')
  }

  return (
    <div>
      <h1>Comments</h1>
      {list.length <= 0 ? <p id='no-comments'>No comments yet</p> : null}
      <ul className='comment-list'>
        {list.map(cmt => {
          return (
            <li key={cmt.id}>
              <Comment content={cmt.content}/>
            </li>
          )
        })}
      </ul> 
      <div id='footer-padding'></div>
      <div id='footer-div'>
        <div id='footer'>
          <form>
            <div>
              <Link to='/login'>Login</Link>
              <button id='new-comment-submit' onClick={(e) => addComment(content, e)}>Submit</button>
            </div>
            <input type='text' value={content} placeholder='add a comment' onChange={(e) => setContent(e.target.value)}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments