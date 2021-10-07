import React from 'react';
import './DisplayName.css';

function DisplayName(props) {
    return (
        <h1>{props.firstName} {props.lastName}</h1>
    )
}

export default DisplayName;