import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from "react-router-dom"

import FriendsList from './components/FriendsList'
import FriendForm from './components/FriendForm';

import axios from "axios";
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      error: "",
      friend: {
        name: '',
        age: '',
        email: ''
    }
  }
  
  };

  componentDidMount() {
    axios.get("http://localhost:5000/friends")
    .then(res => {
      this.setState({ friends: res.data });
    })
    .catch(err => {
      this.setState({ error: err.response.data.message });
    });
  }

  handleChanges = e => {
    e.persist();
    this.setState(prevState => {
      return {
        friend: {
          ...prevState.friend,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  addFriend = () => {
    axios
      .post("http://localhost:5000/friends", this.state.friend)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friends');
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <h1>Lambda Friends!</h1>
      
        <Route 
          exact
          path="/friends"
          render={props => (
            <FriendsList
              {...props}
              friends={this.state.friends}
            />
          )} 
        />
        <Route
          path="/friendForm"
          render={props => (
            <FriendForm
              {...props}
              addFriend={this.addFriend}
              handleChanges={this.handleChanges}
              friend={this.state.friend}
            />
          )}
        />
      </div>
    );
  }
}

export default App;
