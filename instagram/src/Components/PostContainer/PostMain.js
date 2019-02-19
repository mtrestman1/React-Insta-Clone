import React from 'react';

const PostMain = props => {
    
    return ( 
        <div>
            <img src={props.thumbnailUrl} />
            {props.username}
        </div>

     );
}
 
export default PostMain;