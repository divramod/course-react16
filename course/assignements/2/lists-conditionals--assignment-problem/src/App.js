import React, { Component } from 'react';
import './App.css';
import ValidationComponent from './ValidationComponent/ValidationComponent'
import CharComponent from './CharComponent/CharComponent'

class App extends Component {
    state = {
        input: {
            value: 'test',
        }
    }

    inputChangeHandler = (event) => {
        const inputValue = event.target.value
        const newState = {...this.state}
        newState.input.value = inputValue
        this.setState(newState)
    }

    removeCharHandler = (event, index) => {
        let inputValue = [...this.state.input.value]
        inputValue.splice(index, 1)
        const newState = {...this.state}
        newState.input.value = inputValue.join('')
        this.setState(newState)
    
    }

    render() {
        let chars = null
        if (this.state.input.value.length > 0) {
            const inputValueString = this.state.input.value
            const inputValueArray = inputValueString.split("")
            chars = (
                <div>
                    chars
                    {inputValueArray.map((char, index) => {
                        return (
                            <CharComponent
                                char={char}
                                key={index}
                                remove={(event) => this.removeCharHandler(event, index)}
                            />
                        )
                    })}
                </div>
            )
        }

        return (
            <div className="App">
                <input
                    type="text"
                    onChange={(event) => this.inputChangeHandler(event)}
                    value={this.state.input.value}
                />
                <p>{this.state.input.length}</p>
                <ValidationComponent inputLength={this.state.input.value.length} />
                {chars}
            </div>
        );
    }
}

export default App;
