import React, { Component } from 'react';
import './App.css';
import DisplayName from './DisplayName/DisplayName';
import NamesList from './NamesList/NamesList';
import AlertUser from './AlertUser/AlertUser';
import SuperheroTable from './SuperheroTable/SuperheroTable';
import SuperheroCreateForm from './SuperheroCreateForm/SuperheroCreateForm';

class App extends Component {
    constructor(props) {
        super(props);
        
        this.superheroes = [
            {
                superheroId: 1,
                name: 'Batman',
                primaryAbility: 'Wealthy',
                secondarAbility: 'Rich'
            },
            {
                superheroId: 2,
                name: 'Superman',
                primaryAbility: 'Super strength',
                secondarAbility: 'Fly'
            },
            {
                superheroId: 3,
                name: 'Spiderman',
                primaryAbility: 'Spider senses',
                secondarAbility: 'Shoots web'
            }
        ]
        
        this.state = {
            firstName: 'Reggie',
            lastName: 'White',

            names: ['Mike', 'Nevin', 'Aaron', 'Tory', 'Kelly'],

            



        }
    }


    createSuperhero = (newSuperhero) => {
        this.superheroes.push(newSuperhero);
    }

    handleClick = (event) => {

        /* call prompt() with custom message to get user input from alert-like dialog */
        const enteredName = alert('devCodeCamp')
    }

    render() {
        return (
            <div className="container-fluid">
                <DisplayName firstName={this.state.firstName} lastName={this.state.lastName}/>
                <ul><NamesList names={this.state.names} /></ul>
                <AlertUser handleClick={this.handleClick}/>
                <table>
                    <tr>
                        <th>Superhero ID</th>
                        <th>name</th>
                        <th>1st Ability</th>
                        <th>2nd Ability</th>
                    </tr>
                </table>
                <SuperheroTable superheroes={this.superheroes} />
                
                <SuperheroCreateForm createNewSuperhero={this.createSuperhero}/>
            </div>
        )
    }
}

export default App;