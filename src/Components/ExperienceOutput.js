import React from 'react'

function ExperienceOutput(props){
    return(
        <div key={props.index} className='resumeOutput'>
            <div className='titleContainer'>
                <div className='titleName'>{props.outputPosition}</div>
                <div className='companyContainer'>
                    <div>{props.outputCompany}</div>
                    <div>| {props.outputStartDate} - {props.outputEndDate}</div>
                </div>
            </div>
            <div>{props.outputDescription}</div>
        </div>

    )
}

export default ExperienceOutput