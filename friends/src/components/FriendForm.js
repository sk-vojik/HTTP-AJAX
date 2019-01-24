import React from "react"

function FriendForm(props) {

  function handleSubmit(e) {
    e.preventDefault();
    if (props.isUpdating) {
      props.updateItem();
    } else {
      props.addFriend();
    }
  }
  return (
    <div>
      <h3>hello from friend form</h3>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            value={props.friend.name}
            placeholder="Name"
            onChange={props.handleChanges}
          />

          <input
            type="number"
            name="age"
            value={props.friend.age}
            placeholder="Age"
            onChange={props.handleChanges}
          />

          <input
            type="text"
            name="email"
            value={props.friend.email}
            placeholder="Email"
            onChange={props.handleChanges}
          />

          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}

export default FriendForm;