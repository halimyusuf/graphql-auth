import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import SignupMutation from '../queries/signup';
import history from './CustomHistory';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [signup, { data, error }] = useMutation(SignupMutation);

  if (data && data.signup && data.signup.email) {
    history.push('/');
  }
  const onRegister = (e) => {
    e.preventDefault();
    signup({ variables: { email, password } });
    // console.log('resp', resp);
  };

  return (
    <div>
      <h3 className='center-align'>Register</h3>
      <div className='row'>
        <form className='col s6 center-align' onSubmit={onRegister}>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='email'
                type='email'
                value={email}
                className='validate'
                onChange={(e) => setEmail(e.currentTarget.value)}
                placeholder='Email'
              />
            </div>
          </div>
          <div className='row'>
            <div className='input-field col s12'>
              <input
                id='password'
                type='password'
                className='validate'
                value={password}
                onChange={(e) => setPassword(e.currentTarget.value)}
                placeholder='Password'
              />
            </div>
          </div>

          <input type='submit' className='btn' value='Register' />
        </form>
      </div>
    </div>
  );
};

export default Login;
