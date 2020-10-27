import React from 'react';

const userOutput = (props) => {
    return (
        <div>
          <p>Hello {props.username}.</p>
          <p>Welcome to our webpage!</p>
        </div>
);
}

export default userOutput;