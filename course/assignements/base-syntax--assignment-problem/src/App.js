import React, { Component } from 'react';
import './App.css';
import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import Tasks from './Tasks/Tasks';

class App extends Component {
    state = {
        usernames: [
            'Franz',
            'Hans'
        ]
    }

    usernameInputHandler = (event, usernameIndex) => {

        console.log(event);
        console.log(usernameIndex);
        const newUsernames = [...this.state.usernames]
        newUsernames[usernameIndex] = event.target.value
        this.setState({
            usernames: newUsernames,
        })
    }

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            coursor: 'pointer'
        };

        return (
            <div className="App" style={style}>
            <UserInput
                inputChange={this.usernameInputHandler}
                username={this.state.usernames[0]}
                usernamesIndex={0}
            />
            <UserInput
                inputChange={this.usernameInputHandler}
                username={this.state.usernames[1]}
                usernamesIndex={1}
            />
            <UserOutput
            username={this.state.usernames[0]}
            >Output 1</UserOutput>
            <UserOutput
            username={this.state.usernames[1]}
            >Output 2</UserOutput>
            <Tasks />
            </div>
        );
    }
}

export default App;
