import React from 'react'

function ExperienceOutput(props){
    return(
        <div key={props.index}>
            <div>{props.outputCompany}</div>
            <div>{props.outputPosition}</div>
            <div>{props.outputStartDate} - {props.outputEndDate}</div>
            <div>{props.outputDescription}</div>
        </div>
    )
}

export default ExperienceOutput