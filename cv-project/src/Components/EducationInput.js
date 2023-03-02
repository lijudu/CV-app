import React, { useState } from 'react';

function EducationInput(){
    return(
        <div>
        <form>
            <label htmlFor='workExp'>Education</label>
            <br/>
            <input 
                type='text' 
                placeholder='Course/Program'
                name='course'
                />
            <br/>
            <input 
                type='text' 
                placeholder='University'
                name='university'
                />
            <br/>
            <input 
                type='text' 
                placeholder='Start Date'
                name='startDate'
                />
            <br/>
            <input 
                type='text' 
                placeholder='End Date'
                name='endDate'
                />
            <br/>
            <input 
                type='text' 
                placeholder='Description'
                name='description'
                />
            <br/>
            <button>Add</button>
            <button>Delete</button>
    </form>
    </div>
    )
}

export default EducationInput