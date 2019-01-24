import React from "react"
import Friend from './Friend'

import { NavLink } from "react-router-dom"

function FriendsList(props) {
  return(
    <div>
      {props.friends.map(friend => (
      <Friend friend={friend} /> 
      ))}
      <NavLink exact to="/friendForm">Add a friend!</NavLink>
    </div>
  )
}

export default FriendsList