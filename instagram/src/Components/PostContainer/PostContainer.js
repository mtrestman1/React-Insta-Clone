import React from 'react';
import CommentSection from '../CommentSection/CommentSection'

const PostContainer = props => {
return (
    <>
    {props.posts.map((post, index) => 
    <CommentSection key={index} posts={post}/>
    )}
    </>
)
}

export default PostContainer;