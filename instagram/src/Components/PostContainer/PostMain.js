import React from 'react';
import './PostContainer.css';

const PostMain = props => {
    
    return ( 
        <div className='user'>
            <img src={props.thumbnailUrl} alt='' className='thumbnail' />
            <span className='username'>{props.username} </span>
        </div>

     );
}
 
export default PostMain;