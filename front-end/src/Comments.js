import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Comment from './Comment'
import './Comments.css'
import axios from 'axios'

let cmtCnt = 0

const Comments = props => {
  const [cmtList, setCmtList] = useState([])
  const [content, setContent] = useState('')

  const postComment = (content, e) => {
    e.preventDefault()
    
    if (content){
      axios
      .post(`http://localhost:4000/comments/save`, {
        content: content,
      })
      .catch(err => {
        console.log(err)
      })

      setContent('')
    }
  }

  const fetchComments = () => {
    axios
      .get(`http://localhost:4000/comments`)
      .then(response => {
        const comments = response.data.comments
        // console.log(comments)
        let newCmtList = []

        cmtCnt = 0
        comments.forEach(c => {
          const newCmt = {}
          newCmt.content = c
          newCmt.id = cmtCnt++
          newCmtList.push(newCmt)
        })

        setCmtList(newCmtList)
      })
  }

  useEffect(() => {
    fetchComments()

    const intervalHandle = setInterval(() => {
      fetchComments()
    }, 3000)

    return e => {
      clearInterval(intervalHandle)
    }
  }, [])

  return (
    <div>
      <h1>Comments</h1>
      {cmtList.length <= 0 ? <p id='no-comments'>No comments yet</p> : null}
      <ul className='comment-list'>
        {cmtList.map(cmt => {
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
              <button id='new-comment-submit' onClick={(e) => postComment(content, e)}>Post</button>
            </div>
            <input type='text' value={content} placeholder='add a comment' onChange={(e) => setContent(e.target.value)}/>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Comments