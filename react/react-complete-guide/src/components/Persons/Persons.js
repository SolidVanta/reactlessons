import React, { Component } from 'react';
import Person from './Person/Person';

class Persons extends Component {
    static getDerivedStateFromProps(props, state) {
        console.log('[Persons.js] getDerivedStateFromProp');
        return state;
    }

    UNSAFE_componentWillReceiveProps() {
        console.log('[Persons.js] conponentWillReceiveProps');
    }
    shouldComponentUpdate(nextProp, nextState) {
        console.log('[Persons.js] shoudComponentUpdate');
        return true;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('[Persons.js] getSnapshotBeforeUpdate');
        return null;
    }

    componentDidUpdate() {
        console.log('[Persons.js] componentDidUpdate');
    }

    render() {
        console.log('[Persons.js] is rendering...');
        return this.props.persons.map((person, index) => {
            return <Person
                key={person.id}
                name={person.name}
                age={person.age}
                click={() => this.props.clicked(index)}
                changed={(event) => this.props.changed(event, person.id)} />
        });
    }
}


export default Persons;