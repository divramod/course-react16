import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';
import Aux from './../hoc/Aux';
import withClass from './../hoc/withClass';

class App extends PureComponent {

    constructor(props) {
        super(props);
        console.log('[App.js] Inside Constructor');
        this.state = {
            persons: [
                {id:'1b', name: 'Max', age: 28},
                {id:'1a', name: 'Man', age: 29},
                {id:'1c', name: 'Maa', age: 30}
            ],
            otherState: 'some other ',
            showPersons: false,
            toggleClicked: 0
        }
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    // shouldComponentUpdate ( nextProps, nextState ) {
    // console.log(
    // '[Update App.js] Inside shouldComponentUpdate()',
    // nextProps,
    // nextState
    // );
    // // return true;
    // return nextState.persons !== this.state.persons ||
    // nextState.showPersons !== this.state.showPersons;
    // }

    componentWillUpdate ( nextProps, nextState ) {
        console.log(
            '[Update App.js] Inside componentWillUpdate()',
            nextProps,
            nextState
        );
    }

    componentDidUpdate () {
        console.log('[Update App.js] Inside componentDidUpdate()');
    }


    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState(( prevState, props ) => {
            return {
                showPersons: !doesShow,
                toggleClicked: prevState.toggleClicked + 1
            }
        });
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
        const person = { ...this.state.persons[personIndex] };
        person.name = event.target.value;
        const persons = [...this.state.persons]
        persons[personIndex] = person
        this.setState({persons})
    }

    render() {
        console.log('[App.js] Inside render()');
        let persons = null
        if ( this.state.showPersons === true ) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler}
                />
            )
        }

        return (
            <Aux>
                <button
                    type="text"
                    onClick={() => {this.setState({showPersons: true})}}>
                    Show Persons
                </button>
                <Cockpit
                    appTitle={this.props.title}
                    showPersons={this.state.showPersons}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                {persons}
            </Aux>
        );
    }
}
export default withClass(App, classes.App);
