import React from 'react'

function EducationOutput(props){
    return(
        <div key={props.index}>
            <div>{props.outputCourse}</div>
            <div>{props.outputUniversity}</div>
            <div>{props.outputStartDate} - {props.outputEndDate}</div>
            <div>{props.outputDescription}</div>
            <br/>
        </div>
    )
}

export default EducationOutput