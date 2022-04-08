// component represents 1 comment

import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div className='comment-class'>
            <p className='comment-content'>
                {props.content}
            </p>
            <div className='vote-buttons'>
                <button className='rate rate-up'>👍</button>
                <button className='rate rate-down'>👎</button>
            </div>
        </div>
    )
}

export default Comment