import React, { PureComponent } from 'react';
import classes from './App.css';
import Persons from './../components/Persons/Persons';
import Cockpit from './../components/Cockpit/Cockpit';
import Aux from './../hoc/Aux';
import withClass from './../hoc/withClass';

export const AuthContext = React.createContext(false);

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
            toggleClicked: 0,
            authenticated: false,

        }
    }

    componentWillMount() {
        console.log('[App.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[App.js] Inside componentDidMount()');
    }

    componentWillUpdate ( nextProps, nextState ) {
        console.log(
            '[Update App.js] Inside componentWillUpdate()',
            nextProps,
            nextState
        );
    }

    static getDerivedStateFromProps(nextProps, prevState) {
        console.log(
            '[Update App.js] Inside getDerivedStateFromProps()',
            nextProps,
            prevState
        );
        return prevState;
    }

    getSnapshotBeforeUpdate() {
        console.log(
            '[Update App.js] Inside getSnapshotBeforeUpdate()',
        );
        return null;
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

    loginHandler = () => {
        this.setState({authenticated: true});
    }

    render() {
        console.log('[App.js] Inside render()');
        let persons = null
        if ( this.state.showPersons === true ) {
            persons = (
                <Persons
                    persons={this.state.persons}
                    clicked={this.deletePersonHandler}
                    changed={this.nameChangedHandler} />
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
                    login={this.loginHandler}
                    persons={this.state.persons}
                    clicked={this.togglePersonsHandler}
                />
                <AuthContext.Provider value={this.state.authenticated}>
                    {persons}
                </AuthContext.Provider>
            </Aux>
        );
    }
}
export default withClass(App, classes.App);
