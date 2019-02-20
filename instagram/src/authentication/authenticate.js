import React from 'react';
import PostsPage from '../Components/PostContainer/PostsPage';


const authenticate = PostsPage => 
    class extends React.Component {
        render() {
          return <PostsPage />;
        }
      };


export default authenticate;