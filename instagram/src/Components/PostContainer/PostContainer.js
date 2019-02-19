import React from 'react';
import Post from '../PostContainer/Post'
import PostMain from './PostMain';

const PostContainer = props => {
return (
    <div>
    {props.posts.map((post, index) => (
        <div>
    <Post key={index} posts={post}/>

    <PostMain  posts={post}/>
    </div>
    ))} 
    </div>
)
}

export default PostContainer;