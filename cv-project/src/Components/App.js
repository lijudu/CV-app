import React, { useState } from 'react';
import PersonalInputs from './Header';
import PersonalOutput from './HeaderOutput';
import ExperienceInput from './ExperienceInput'
import EducationInput from './EducationInput'
import ExperienceOutput from './ExperienceOutput';



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

    const [experience, setExperience] = useState([{
        company: 'A Software Company',
        position: 'Software Developer',
        startDate: '2022',
        endDate: 'present',
        description: 'Job Description here'
    }])

    const handleFormChange = (index, event) => {
        let data = [...experience]
        data[index][event.target.name] = event.target.value
        setExperience(data)
    }

    // const addFields = () => {
    //     let newfield = {
    //         company: '',
    //         position: '',

    //         setExperience([...experience, newfield])

    //     }
    // }
    
    const [counter, setCounter] = useState(0)


    const handleSubmit = (e) => {
        e.preventDefault();
        setCounter(counter + 1);
        console.log(counter)
        let newfield = {
            company: '',
            position: '',
            startDate:'',
            endDate:'',
            description:''
        }

        setExperience([...experience, newfield])
        console.log(experience)
    }


    return(
        <div className='container'>
            <div className='input'>
                <PersonalInputs
                    nameInput={details.name}
                    numberInput={details.phone}
                    emailInput={details.email}
                    handleChange={getDetails}/>
                <br/>
                <label htmlFor='workExp'>Work Experience</label>
                <br/>

                    {experience.map((input, index) => {
                        return(
                            <ExperienceInput
                                key={index}
                                companyInput={input.company}
                                positionInput={input.position}
                                startDateInput={input.startDate}
                                endDateInput={input.endDate}
                                descriptionInput={input.description}
                                handleChange={event => handleFormChange(index, event)}
                                handleClick={handleSubmit}
                            />
                        )
                    })}


                <br/>
                <EducationInput/>
            </div>
            <div className='output'>
                <PersonalOutput
                    outputName={details.name}
                    outputNumber={details.phone}
                    outputEmail={details.email}
                    />
                <br/>
                {experience.map((input, index) => {
                        return(
                            <ExperienceOutput
                                key={index}
                                outputCompany={input.company}
                                outputPosition={input.position}
                                outputStartDate={input.startDate}
                                outputEndDate={input.endDate}
                                outputDescription={input.description}
                            />
                        )
                    })}

            </div>
        </div>
    )
}

export default App