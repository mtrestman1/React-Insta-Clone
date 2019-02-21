import React from 'react';
import Post from '../PostContainer/Post'


const PostContainer = props => {
return (
    <div className='post-container'>
    {props.posts.map((post, index) => (
        <div>
    <Post key={index} posts={post}/>

    </div>
    ))} 
    </div>
)
}

export default PostContainer;