import React, {Component} from 'react';
import './AlertUser.css';

class AlertUser extends Component {
    

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.handleClick(this.state)

    }

    render() { 
        return ( 
            <form onSubmit={this.handleSubmit}>
                <button type="submit">Click Me</button>
            </form>
         );
    }
}

export default AlertUser;