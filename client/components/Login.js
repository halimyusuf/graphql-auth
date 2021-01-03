import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import LoginMutation from '../queries/login';
import history from './CustomHistory';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { data, error }] = useMutation(LoginMutation);

  if (data && data.login && data.login.email) {
    history.push('/');
  }
  const onLogin = (e) => {
    e.preventDefault();
    login({ variables: { email, password } });
    // console.log('resp', resp);
  };

  return (
    <div>
      <h3 className='center-align'>Login</h3>
      <div className='row'>
        <form className='col s6 center-align' onSubmit={onLogin}>
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

          <input type='submit' className='btn' value='Login' />
        </form>
      </div>
    </div>
  );
};

export default Login;
