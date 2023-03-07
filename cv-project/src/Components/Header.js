import React from 'react';

function PersonalInputs(props) {
    return(
        <div>
        <form>
            <input 
                type='text' 
                placeholder='Name'
                name='name'
                value={props.nameInput}
                onChange={props.handleChange}/>
            <br/>
            <input 
                type='email' 
                placeholder='Email'
                name='email'
                value={props.emailInput}
                onChange={props.handleChange}
                 />
            <br/>
            <input 
                type='text' 
                placeholder='Phone Number'
                name='phone'
                value={props.numberInput}
                onChange={props.handleChange}
                />
            <br/>
        </form>

        </div>
    )
}


  
export default PersonalInputs;
  