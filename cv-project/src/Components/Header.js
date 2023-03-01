import React, { useState } from 'react';

function Header() {


    // declare state variable
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [number, setNumber] = useState('')


    return(
        <div>
        <form>
            <label htmlFor='personal'>Personal Details</label><br></br>
            <input 
                type='text' 
                placeholder='Name'
                name='name'
                value={name}
                onChange={e => setName(e.target.value)}/>
            <br/>
            <input 
                type='text' 
                placeholder='Email'
                name='email'
                value={email}
                onChange={e => setEmail(e.target.value)}
                 />
            <br/>
            <input 
                type='text' 
                placeholder='Phone Number'
                name='number'
                value={number}
                onChange={e => setNumber(e.target.value)}
                />
            <br/>
        </form>
        <hr/>
        {name !== '' && <p>Your name is {name}</p>}
        {email !== '' && <p>The email is{email}</p>}
        {number !== '' && <p>Your number is {number}</p>}
        </div>
    )
}


  
export default Header;
  