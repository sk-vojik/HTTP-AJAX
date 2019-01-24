import React, { Component } from 'react';

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
        {this.state.error && <h3>{this.state.error}</h3>}

        {this.state.friends.map(friend => (
          <div>
          <h2>{friend.name}</h2>
          <p>{friend.age}</p>
          <p>{friend.email}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
