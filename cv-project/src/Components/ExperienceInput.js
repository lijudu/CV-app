import React, { useState } from 'react';

function ExperienceInput(){
    return(
        <div>
            <form>
                <label htmlFor='workExp'>Work Experience</label>
                <br/>
                <input 
                    type='text' 
                    placeholder='Company'
                    name='compnay'
                    />
                <br/>
                <input 
                    type='text' 
                    placeholder='Position'
                    name='position'
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

export default ExperienceInput