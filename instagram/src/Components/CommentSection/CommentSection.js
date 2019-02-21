import React from 'react';
import Comment from '../CommentSection/Comment'

import './CommentSection.css'

class CommentSection extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { 
            comments: props.posts.comments, 
            commentText: ''
            
         }
    }

    addNewComment = e => {
        e.preventDefault()
        const newComment = {
            username: 'max',
            text: this.state.commentText
        }
        this.setState({
            comments: [...this.state.comments, newComment], 
            commentText: ''
        })
    }

    handleChange = e => {
        this.setState({
            commentText: e.target.value
        })
        
    }

    render() { 
        
        return ( 
                <div className='comment-section'>
                {this.state.comments.map((comment, index) => (
                <Comment key={index} comments={comment}/>
                ))}
                <form onSubmit={this.addNewComment}>
                    <input onChange={this.handleChange} value={this.state.commentText} type='text' placeholder='Add a comment...' className='comment-bar' />
                </form>
                </div> 
                );
    }
}
 
export default CommentSection;