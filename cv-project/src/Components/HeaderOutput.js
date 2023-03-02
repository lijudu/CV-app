import React from 'react'

function PersonalOutput(props){
    return(
        <div>
            <h1>{props.outputName}</h1>
            <div>{props.outputEmail}</div>
            <div>{props.outputNumber}</div>
        </div>
    )
}

export default PersonalOutput