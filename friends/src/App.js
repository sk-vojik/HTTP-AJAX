import React, { Component } from 'react';

import FriendsList from './components/FriendsList'

import axios from "axios";
import './App.css';

class App extends Component {
  state = {
    friends: [],
    error: ""
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
    .then(res => {
      console.log(res);
      this.setState({ friends: res.data });
    })
    .catch(err => {
      this.setState({ error: err.response.data.message });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>Lambda Friends!</h1>
      
        <FriendsList friends={this.state.friends} /> 
      </div>
    );
  }
}

export default App;
