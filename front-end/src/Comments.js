import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Comment from './Comment'
import axios from 'axios'
import './Comments.css'


let cmtCnt = 0
let commentuid = []
const Comments = props => {
  const [cmtList, setCmtList] = useState([])
  const [content, setContent] = useState('')
  const [uid_1, setUID] = useState('')

  const postComment = (content, e) => {
    e.preventDefault()
    
    if (content){
      axios
      .post(`http://localhost:3000/comments/new`, {
        content: content,
        author: 'BobTheBuilder12'
      })
      .then(
        () => setContent('')
      )
      .catch(err => {
        console.log(err)
      })
    }
  }
  

  const fetchComments = () => {
    axios
      .get(`http://localhost:3000/comments`)
      .then(response => {
        const comments = response.data.comments
        console.log(comments)
        let newCmtList = []

        cmtCnt = 0
        comments.forEach(c => {
          const newCmt = {}
          newCmt.content = c.content
          newCmt.author = c.author
          newCmt.rating = c.rating
          newCmt.uid = c.uid
		  commentuid.push(c.uid)
          newCmt.id = cmtCnt++ // for react
          newCmtList.push(newCmt)
        })

        setCmtList(newCmtList)
      })
  }
  

  
  useEffect(() => {
    fetchComments()
    const intervalHandle = setInterval(() => {
      fetchComments()
	  
    }, 1000)

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
              <Comment content={cmt.content} author={cmt.author} rating={cmt.rating} cmtUID={cmt.uid}/>
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