import React, { Component, useState } from 'react';
import styled, { ThemeConsumer } from 'styled-components';
// import Radium, {StyleRoot} from 'radium';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
    constructor(props) {
        super(props);
        console.log('[App.js] constructor');
    }

    state = {
        persons: [
            { id: '1', name: 'Max', age: 28 },
            { id: '2', name: 'Manu', age: 29 },
            { id: '3', name: 'Stephanie', age: 26 }
        ],
        otherState: 'some other value',
        showPersons: false
    }

    static getDerivedStateFromProps(props, state) {
        console.log('[App.js] getDerivedStateFromProps', props);
        return state;
    }

    componentDidMount() {
        console.log('[App.js componenetDidMount');
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.log('[App.js] shouldComponentUpdate');
        return true;
    }

    componentDidUpdate() {
        console.log('[App.js] componentDidUpdate');

    }

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState(
            {
                showPersons: !doesShow
            })
    }

    switchNameHandler = (newName) => {
        this.setState(
            {
                persons: [
                    { name: newName, age: 28 },
                    { name: 'Manu', age: 29 },
                    { name: 'Stephanie', age: 27 }
                ]
            })
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            console.log('ID: ', id);
            return p.id === id;
        });

        const person = { ...this.state.persons[personIndex] };

        person.name = event.target.value;

        const persons = [...this.state.persons];
        persons[personIndex] = person;

        this.setState({ persons: persons, showPersons: this.state.showPersons });
    }

    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({ persons: persons });
    }

    displayPersons = () => {
        this.setState({ persons: this.state.persons, showPersons: !this.state.showPersons });
    }

    render() {
        console.log('[App.js] render');
        let persons = null;

        if (this.state.showPersons) {
            persons = <Persons
                persons={this.state.persons}
                clicked={this.deletePersonHandler}
                changed={this.nameChangedHandler} />;
        }

        return (
            <div className="App">
                <Cockpit
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.displayPersons} />
                {persons}
            </div>
        )
    }


};

export default App;
