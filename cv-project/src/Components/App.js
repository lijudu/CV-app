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
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus mattis molestie a. Orci eu lobortis elementum nibh.',

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
            description:'',
        }

        setExperience([...experience, newfield])
        console.log(experience)
    }

    const [education, setEducation] = useState([{
        course: 'Some Degree',
        university: 'Some University',
        startDate: '2020',
        endDate: '2023',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Est ante in nibh mauris cursus mattis molestie a. Orci eu lobortis elementum nibh.',
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
            description: '',
        }

        setEducation([...education, newfield])
        console.log(education)
    }

    const removeExpFields = (index, event) => {
        event.preventDefault()
        let data = [...experience]
        data.splice(index, 1)
        setExperience(data)
    }

    const removeEduFields = (index, event) => {
        event.preventDefault()
        let data = [...education]
        data.splice(index, 1)
        setEducation(data)
    }

    return(
        <div className='container'>
            <div className='inputContainer'>
                <div className='input'>
                <div className='header'>Personal Details</div>
                <PersonalInputs
                    nameInput={details.name}
                    numberInput={details.phone}
                    emailInput={details.email}
                    handleChange={getDetails}/>
                <br/>
                <div className='header'>Work Experience</div>
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
                                handleDelete={event => removeExpFields(index, event)}
                            />
                        )
                    })}
                <button onClick={handleExpSubmit} className='add'>Add</button>
                <br/>
                <br/>
                <div className='header'>Education</div>
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
                                handleDelete={event => removeEduFields(index, event)}
                            />
                    )})}
                <button onClick={handleEduSubmit} className='add'>Add</button>
            </div>
            </div>
            
            <div className='outputContainer'>
                <div className='output'>
                <PersonalOutput
                    outputName={details.name}
                    outputNumber={details.phone}
                    outputEmail={details.email}
                    />
                <br/>
                <div className='resumeWorkEducation'>Work Experience</div>
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
                <br/>
                <div className='resumeWorkEducation'>Education</div>
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
        </div>
    )
}

export default App