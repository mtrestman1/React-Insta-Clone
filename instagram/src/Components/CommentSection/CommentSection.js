import React from 'react';
import Comment from '../CommentSection/Comment'

import './CommentSection.css'

const CommentSection = props => {
    return (
        <div className='comment-section'>
        {props.posts.map((comment, index) => (
            <Comment key={index} comments={comment}/>
        ))}
        <form>
           <input type='text' placeholder='Add A Comment...' />
       </form>
        </div>
    )
}



export default CommentSection;