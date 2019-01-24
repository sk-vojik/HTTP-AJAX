import React from "react"
import Friend from './Friend'

function FriendsList(props) {
  return(
    <div>
      {props.friends.map(friend => (
      <Friend friend={friend} /> 
      ))}
    </div>
  )
}

export default FriendsList