import React from 'react';


const Comment = props => {
    return ( 
       
        <div>
       <div>{props.comments.username}</div>
       <div>{props.comments.text}</div>
       </div>
     );
}
 
export default Comment;