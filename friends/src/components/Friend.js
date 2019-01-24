import React from "react"
import {BrowserRouter as Route} from "react-router-dom"

function Friend(props) {
  return(
    <div>
      <h2>{props.friend.name}</h2>
      <p>{props.friend.age}</p>
      <p>{props.friend.email}</p>

      <button>Update Friend</button>
      <button>Delete Friend :(</button>

    </div>
  )
}

export default Friend