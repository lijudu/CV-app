import React from 'react'

function PersonalOutput(props){
    return(
        <div>
            <div>{props.outputName}</div>
            <div>{props.outputEmail}</div>
            <div>{props.outputNumber}</div>
            <hr/>
        </div>
    )
}

export default PersonalOutput