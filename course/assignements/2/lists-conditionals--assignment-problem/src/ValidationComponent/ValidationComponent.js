import React from 'react'
const validationComponent = (props) => {
    const minimumLength = 3
    let validationMessage = 'Text long enough'
    if (props.inputLength < minimumLength ) {
        validationMessage = "text to short"
    }

    return (
        <div>
            length: {props.inputLength}/{minimumLength} {validationMessage}
        </div>
    )
}
export default validationComponent;
