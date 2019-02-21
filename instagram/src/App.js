import React, { Component } from 'react';
import './App.css';

import authenticate from './authentication/authenticate';
import Login from './Components/Login/Login';



const Authenticate = authenticate(PostsPage)(Login)

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
       
        
      </div>
    );
  }
}

export default App;
