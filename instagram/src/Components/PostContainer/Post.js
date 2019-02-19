import React from 'react';
import PostMain from './PostMain';
import CommentSection from '../CommentSection/CommentSection';

const Post = props => {
    return ( 
        <div>
            <PostMain 
            username= {props.posts.username}
            thumbnailUrl= {props.posts.thumbnailUrl}
            />
            
            <div>
                <img src={props.posts.imageUrl}/>
            </div>

            <CommentSection posts={props.posts.comments}/>

        </div>
     );
}
 
export default Post;