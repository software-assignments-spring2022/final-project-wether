import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'
import Comment from './Comment'
import axios from 'axios'
import './Comments.css'


let cmtCnt = 0
let commentuid = []
let username = ""
const Comments = props => {
  const [cmtList, setCmtList] = useState([])
  const [content, setContent] = useState('')
  //const [user_name, setUser] = useState('')
  //const [pass_word, setPassword] = useState('')

  const postComment = (content, e) => {
    e.preventDefault()
	get_username();
    if (content && (username !== "")){
      axios
      .post(`${process.env.REACT_APP_SERVER_HOSTNAME}/comments/new`, {
        content: content,
        author: username
      })
      .then(
        () => setContent('')
      )
      .catch(err => {
        console.log(err)
      })
    }
  }
  
  const signout = (e) => {
	  username = "";
	  axios
	  .post(`${process.env.REACT_APP_SERVER_HOSTNAME}/signout`,{
		  username: username,
		  passowrd: ""
	  })
	  .then(
	  	//() => setUser(''), 
		//() => setPassword('')
	  )
	  .catch(err => {
		  console.error(err)
	  })
  }
  
  const get_username = () => {
	  axios
	  .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/username`)
	  .then(response => {
		  username = response.data.username
	  })
  }
  

  const fetchComments = () => {
	  get_username();
    axios
      .get(`${process.env.REACT_APP_SERVER_HOSTNAME}/comments`)
      .then(response => {
        const comments = response.data.comments
        //console.log(comments)
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
	  
    }, 500)

    return e => {
      clearInterval(intervalHandle)
    }
  })

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
			  {username === "" ? <Link to='/login'>Login</Link> : <p id= 'logged-in'>{username}</p>}
			  {username === "" ? null : <button id='new-comment-submit' onClick={(e) => signout(e)}>Sign Out</button>}
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