import React, { Component } from 'react';
import classes from './Person.css';
import Aux from './../../../hoc/Aux';
import withClass from './../../../hoc/withClass';
import PropTypes from 'prop-types';
import { AuthContext } from '../../../containers/App'

class Person extends Component {
    constructor(props) {
        super(props);
        console.log('[Person.js] Inside Constructor');
        this.inputElement = React.createRef();
    }

    componentWillMount() {
        console.log('[Person.js] Inside componentWillMount()');
    }

    componentDidMount() {
        console.log('[Person.js] Inside componentDidMount()');
        if(this.props.position === 0) {
            this.inputElement.current.focus()
        }
    }

    componentWillUnmount() {
        console.log('[Person.js] Inside componentWillUnmount()');
    }

    focus() {
        this.inputElement.current.focus()
    }

    render() {

        console.log('[Person.js] Inside render()');

        return (
            <Aux>
                <AuthContext.Consumer>
                    {auth => auth ? <p>I'm authenticated</p> : null}
                </AuthContext.Consumer>
                <button onClick={this.props.click} >Delete</button>
                <p>I'm {this.props.name}</p>
                <p>I'm {this.props.age}</p>
                <p>{this.props.children}</p>
                <input
                    ref={this.inputElement}
                    type="text"
                    onChange={this.props.changed}
                    value={this.props.name} />
                </Aux>
        )
    }
}

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}

export default withClass(Person, classes.Person);
