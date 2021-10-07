import React from 'react';
import './SuperheroTable.css';

function SuperheroTable(props) {
    
    
    
    return (
        <ul>
        {props.superheroes.map(item => {
          return <table>
            <tr>
            <td>{item.superheroId}</td>
            <td>{item.name}</td>
            <td>{item.primaryAbility}</td>
            <td>{item.secondarAbility}</td>
            </tr>
          </table>
          
        })}
      </ul>
    )
}

export default SuperheroTable;