import React, { useState } from 'react';
import PersonalInputs from './Header';
import PersonalOutput from './HeaderOutput';
import ExperienceInput from './ExperienceInput'
import EducationInput from './EducationInput'
import ExperienceOutput from './ExperienceOutput';
import EducationOutput from './EducationOutput';



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
        description: 'Job description here'
    }])

    const handleFormChange = (index, event) => {
        let data = [...experience]
        data[index][event.target.name] = event.target.value
        setExperience(data)
    }

    
    const [counter, setCounter] = useState(0)

    const handleExpSubmit = (e) => {
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

    const [education, setEducation] = useState([{
        course: 'Some Degree',
        university: 'Some University',
        startDate: '2023',
        endDate: 'expected 2025',
        description: 'Some description here'
    }])

    const handleEduChange = (index, event) => {
        let data = [...education]
        data[index][event.target.name] = event.target.value
        setEducation(data)
    }

    const [eduCounter, setEduCounter] = useState(0)


    const handleEduSubmit = (e) => {
        e.preventDefault();
        setEduCounter(eduCounter + 1);
        console.log(eduCounter)
        let newfield = {
            course: '',
            university: '',
            startDate: '',
            endDate: '',
            description: ''
        }

        setEducation([...education, newfield])
        console.log(education)
    }

    const removeExpFields = (index) => {
        let data = [...experience]
        data.splice(index, 1)
        setExperience(data)
    }

    const removeEduFields = (index) => {
        let data = [...education]
        data.splice(index, 1)
        setEducation(data)
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
                                handleClick={handleExpSubmit}
                                handleDelete={removeExpFields}
                            />
                        )
                    })}

                <br/>
                <label htmlFor='education'>Education</label>
                <br/>
                    {education.map((input, index) => {
                        return(
                            <EducationInput
                                key={index}
                                courseInput={input.course}
                                universityInput={input.university}
                                eduStartDate={input.startDate}
                                eduEndDate={input.endDate}
                                eduDescription={input.description}
                                handleChange={event => handleEduChange(index, event)}
                                handleClick={handleEduSubmit}
                                handleDelete={removeEduFields}
                            />
                    )})}
                
            </div>
            <div className='output'>
                <PersonalOutput
                    outputName={details.name}
                    outputNumber={details.phone}
                    outputEmail={details.email}
                    />
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
                <hr/>
                {education.map((input, index) => {
                    return(
                        <EducationOutput
                            key={index}
                            outputCourse={input.course}
                            outputUniversity={input.university}
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