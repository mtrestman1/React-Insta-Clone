import React from 'react';


const Comment = props => {
    return ( 
       
        <div className='comments'>
       <span className='comment-username'>{props.comments.username}</span> {' '}
       <span className='comment-text'>{props.comments.text}</span>
       </div>
       
     );
}
 
export default Comment;