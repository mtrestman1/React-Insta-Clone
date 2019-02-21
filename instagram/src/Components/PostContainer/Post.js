import React from 'react';
import PostMain from './PostMain';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return ( 
        <div>
            <PostMain 
            thumbnailUrl= {props.posts.thumbnailUrl}
            username= {props.posts.username}
            
            />
            
            <div>
                <img src={props.posts.imageUrl} alt='' className='main-img'/>
            </div>

            <CommentSection posts={props.posts}/>

        </div>
     );
}
 
export default Post;