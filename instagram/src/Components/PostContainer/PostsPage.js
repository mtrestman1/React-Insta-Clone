import React from 'react';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import PostsPage from './Components/PostContainer/PostsPage';


class PostsPage extends Component {
    constructor() {
        super();
        this.state = {
         posts: [], 
         
        };
      }
    
      componentDidMount() {
        
        this.setState({ 
          posts: dummyData
          
        });
      }
    
      render() {
        return (
          <div className="App">
            <Login />
           
           
            <SearchBar />
            <PostContainer posts={this.state.posts}/>
          </div>
        );
      }
}
 
export default PostsPage;