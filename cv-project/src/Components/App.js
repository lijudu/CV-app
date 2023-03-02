import React, { useState } from 'react';
import PersonalInputs from './Header';
import PersonalOutput from './HeaderOutput';
import ExperienceInput from './ExperienceInput'
import EducationInput from './EducationInput'
// import Preview from './Preview'

function App(){
    const [details, setDetails] = useState({
        name: 'Jane Doe',
        phone: '123-456-7890',
        email: 'example@gmail.com',
    })

    function getDetails(e) {
        const {name, value} = e.target
        setDetails(prevNames => ({
            ...prevNames,
            [name]: value
        }))
    }

    return(
        <div className='container'>
            <div className='input'>
                <PersonalInputs
                    nameInput={details.name}
                    numberInput={details.phone}
                    emailInput={details.email}
                    handleChange={getDetails}/>
                <ExperienceInput/>
                <EducationInput/>
            </div>
            <div className='output'>
                <PersonalOutput
                    outputName={details.name}
                    outputNumber={details.phone}
                    outputEmail={details.email}
                />
            </div>
        </div>
    )
}

export default App