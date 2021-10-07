import React from 'react';
import './NamesList.css';

function NamesList(props) {
    

    return (
        props.names.map((name) => <li>{name}</li>)
    )
}

export default NamesList;