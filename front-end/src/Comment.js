// component represents 1 comment

import React from 'react';
import './Comment.css';

const Comment = props => {
    return (
        <div className={'comment-class'}>
            <p>
                {props.content}
            </p>
        </div>
    )
}

export default Comment