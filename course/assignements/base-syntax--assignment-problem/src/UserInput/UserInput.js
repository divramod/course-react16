import React from 'react';
const userInput = (props) => {
    return (
        <div>
          <h2>User Input</h2>
          username 0:<input
              onChange={(event) => props.inputChange(event, props.usernamesIndex)}
              value={props.username}
          ></input>
        </div>
    )
}
export default userInput
