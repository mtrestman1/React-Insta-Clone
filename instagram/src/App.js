import React, { Component } from 'react';
import './App.css';
import dummyData from './dummy-data';
import PostContainer from './Components/PostContainer/PostContainer';
import SearchBar from './Components/SearchBar/SearchBar';
import PostsPage from './Components/PostContainer/PostsPage';
import authenticate from './authentication/authenticate';



const Authenticate = authenticate(PostsPage)

class App extends Component {
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
        <Authenticate />
        <PostsPage />
        <SearchBar />
        <PostContainer posts={this.state.posts}/>
      </div>
    );
  }
}

export default App;
