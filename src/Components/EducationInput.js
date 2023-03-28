import React  from 'react';

function EducationInput(props){
    return(
        <div>
        <form key={props.index} onSubmit={props.handleClick}>
            <input 
                type='text' 
                placeholder='Course/Program'
                name='course'
                value={props.courseInput}
                onChange={props.handleChange}
                />
            <br/>
            <input 
                type='text' 
                placeholder='University'
                name='university'
                value={props.universityInput}
                onChange={props.handleChange}
                />
            <br/>
            <input 
                type='text' 
                placeholder='Start Date'
                name='startDate'
                value={props.eduStartDate}
                onChange={props.handleChange}
                />
            <br/>
            <input 
                type='text' 
                placeholder='End Date'
                name='endDate'
                value={props.eduEndDate}
                onChange={props.handleChange}
                />
            <br/>
            <input 
                type='text' 
                placeholder='Description'
                name='description'
                value={props.eduDescription}
                onChange={props.handleChange}
                />
            <br/>
            <button
                type='submit'
                onClick={props.handleDelete}
                className='delete'>Delete</button>
    </form>
    </div>
    )
}

export default EducationInput