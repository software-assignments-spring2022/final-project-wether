// component represents 1 comment

import React from 'react';
import axios from 'axios'
import './Comment.css';

const Comment = props => {
    const vote = (good) => {
        axios
            .post(`http://localhost:3000/comments/vote`, {
                good: good,
                uid: props.cmtUID
            })
            .catch(err => {
                console.log(err)
            })
    }

    const rating_to_str = (rating) => {
        if (rating > 0){
            return '+' + rating.toString()
        } else{
            return rating.toString()
        }
    }

    return (
        <div className='comment-class'>
            <div className='comment-header'>
                <p className='comment-author'>{props.author}</p>
                <p className='comment-rating'>{rating_to_str(props.rating)}</p>
            </div>
            <div className='comment-body'>
                <p className='comment-content'>
                    {props.content}
                </p>
                <div className='vote-buttons'>
                    <button className='rate rate-up' onClick={() => vote(true)}>👍</button>
                    <button className='rate rate-down' onClick={() => vote(false)}>👎</button>
                </div>
            </div>
        </div>
    )
}

export default Comment