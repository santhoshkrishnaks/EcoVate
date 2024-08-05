import React from 'react';
import { SignUp } from '@clerk/clerk-react';
import './SignUpPage.css'
import logo from '../assets/logow.png';
const SignUpPage = () => {
  return (
    <div className="signup">
    <div className='sign'>
    <div className='photo2'>
    <img src={logo} alt=''/>
    </div>
      <SignUp/>
    </div>
    </div>
  );
};

export default SignUpPage;
