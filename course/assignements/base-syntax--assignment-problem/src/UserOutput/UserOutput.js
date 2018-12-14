import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className='User'>
           <h2>User Output</h2>
           <p>Name: {props.username}</p>
           <p>2</p>
           <p>{props.children}</p>
        </div>
    );
}

export default userOutput;
