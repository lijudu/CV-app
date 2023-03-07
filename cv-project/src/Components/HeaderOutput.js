import React from 'react'

function PersonalOutput(props){
    return(
        <div className='resumeHeader'>
            <div className='resumeName'>{props.outputName}</div>
            <div className='resumeEmail'>{props.outputEmail}</div>
            <div className='resumePhone'>{props.outputNumber}</div>

        </div>
    )
}

export default PersonalOutput