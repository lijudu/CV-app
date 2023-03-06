import React from 'react';


function ExperienceInput(props){
    return(
        <div>
            <form key={props.index} onSubmit={props.handleClick}>
                <input 
                    type='text' 
                    placeholder='Company'
                    name='company'
                    value={props.companyInput}
                    onChange={props.handleChange}
                    />
                <br/>
                <input 
                    type='text' 
                    placeholder='Position'
                    name='position'
                    value={props.positionInput}
                    onChange={props.handleChange}
                    />
                <br/>
                <input 
                    type='text' 
                    placeholder='Start Date'
                    name='startDate'
                    value={props.startDateInput}
                    onChange={props.handleChange}
                    />
                <br/>
                <input 
                    type='text' 
                    placeholder='End Date'
                    name='endDate'
                    value={props.endDateInput}
                    onChange={props.handleChange}
                    />
                <br/>
                <input 
                    type='text' 
                    placeholder='Description'
                    name='description'
                    value={props.descriptionInput}
                    onChange={props.handleChange}
                    />
                <br/>
                <button 
                    type='submit' 
                    onClick={props.handleClick}
                    >Add</button>
                <button
                    type='submit'
                    onClick={props.handleDelete}>Delete</button>
        </form>
        

        </div>
    )
}

export default ExperienceInput