import React, { Component } from 'react';
import classes from './Person.module.css';
// import './Person.css';



class Person extends Component {
    render() {
        console.log('[Person.js] rendering...');
        return (
            <div className={classes.Person} >
                <p onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" defaultValue={this.props.name} onChange={this.props.changed}></input>
            </div>
        )
    }
};

export default Person;