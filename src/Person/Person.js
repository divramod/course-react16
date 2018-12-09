import React from 'react';
import Radium from 'radium';
import './Person.css'

const person = (props) => {
    const style = {
        '@media (min-width: 800px)': {
            width: '200px'
        }
    }
  return (
      <div className="Person" style={style}>
        <p onClick={props.click}>I'm {props.name}</p>
        <p>I'm {props.age}</p>
        <p>{props.children}</p>
        <input
          onChange={props.changed}
          value={props.name}
        />
      </div>
  );
}

export default Radium(person);
