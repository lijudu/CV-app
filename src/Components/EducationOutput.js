import React from 'react'

function EducationOutput(props){
    return(
        <div key={props.index} className='resumeOutput'>
            <div className='titleContainer'>
                <div className='titleName'>{props.outputCourse}</div>
                <div className='companyContainer'>
                    <div>{props.outputUniversity}</div>
                    <div>| {props.outputStartDate} - {props.outputEndDate}</div>
                </div>
            </div>
            <div>{props.outputDescription}</div>
        </div>
    )
}

export default EducationOutput