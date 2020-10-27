import React from 'react';

const userInput = (props) => {
    return(
    <div>
        <input type="text" defaultValue={props.username} onChange={props.changed}/>
    </div>
    );
}

export default userInput;