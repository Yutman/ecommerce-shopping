import { useState } from 'react';

import FormInput from '../form-input/form-input.component';

import { createAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils';

import './sign-up-form.styles.scss';

import Button from '../button/button.component';

const defaultFormFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: ''
};


const SignUpForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { displayName, email, password, confirmPassword } = formFields;

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        if(password !== confirmPassword ) {
            alert('passwords do not match');
            return;
        }

    try {
        const response = await createAuthUserWithEmailAndPassword(email, password);
        console.log(response);
    } catch(error) {
        console.error('user creation encountered an error', error);
    }
    };

     const handleChange = (event) => {
        const {name, value} = event.target;

        setFormFields({...formFields, [name]: value});
    };

    return (
     <div className='sign-up-container'>
        <h2>Don't have an account?</h2>
        <span>
            Sign up with email and password
        </span>
        <form onSubmit={handleSubmit}>
        <FormInput
        label= 'Display Name'
        type='text' 
        required onChange={handleChange} 
        name='displayName' 
        value={displayName}/>

        <FormInput
        label='Email' 
        type='email' 
        required onChange={handleChange} 
        name='email' 
        value={email}/>

        <FormInput
        label='Password'
        type='password' 
        required onChange={handleChange} 
        name='password' 
        value={password}/>

        <input
        label='Confirm Password' 
        type='password' 
        required onChange={handleChange} 
        name='confirmPassword' 
        value={confirmPassword}/>

        <Button type="Submit">Sign Up</Button>
        </form>
     </div>
    );
};

export default SignUpForm;