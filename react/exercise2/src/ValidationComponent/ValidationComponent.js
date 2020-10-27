import React from 'react';

const validationComponent = (props) => {
    return (
        <div>
            <p>Number of chars: {props.count}</p>
            {props.count < 5 ? <p>Text too short</p> : <p>Text long enough</p>}
            <p>{props.msg}</p>
        </div>
    )
};

export default validationComponent;