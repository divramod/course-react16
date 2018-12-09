import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {id:'1b', name: 'Max', age: 28},
            {id:'1a', name: 'Man', age: 29},
            {id:'1c', name: 'Maa', age: 30}
        ],
        otherState: 'some other ',
        showPersons: false,

    }

    togglePersonsHandler = () => {
        console.log("in");
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    deletePersonHandler = (personsIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personsIndex, 1)
        this.setState({persons})
    }

    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex( p => {
            return p.id === id;
        });

        const person = {
            ...this.state.persons[personIndex]
        };
    
        person.name = event.target.value;

        const persons = [...this.state.persons]
        persons[personIndex] = person
        this.setState({persons})
    }

    render() {
        const style = {
            backgroundColor: 'green',
            color: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            coursor: 'pointer'
        };

        let persons = null
        if ( this.state.showPersons === true ) {
            persons = (
                <div>
                {this.state.persons.map((person, index) => {
                    return <Person
                        key={person.id}
                        click={() => this.deletePersonHandler(index)}
                        name={person.name}
                        age={person.age}
                        changed={(event) => this.nameChangedHandler(event, person.id)}
                    />
                })}
                </div>
            )
            style.backgroundColor = 'red'
        }

        let classes = []
        if (this.state.persons.length <= 2) {
            classes.push('red')
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold')
        }

        return (
                <div className="App">
                <h1>Hi, I'm a React App</h1>
                <p className={classes.join(' ')}>This is really working</p>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}
                >Toggle Persons</button>
                {persons}
                </div>
        );
    }
}

export default App;
