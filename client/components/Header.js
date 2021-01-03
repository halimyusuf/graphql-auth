import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import history from './CustomHistory';
import logoutMutation from '../queries/logout';
import UserQuery from '../queries/currentUser';

const Header = (props) => {
  const [logout, { data }] = useMutation(logoutMutation);
  const { loading, error, data: userData, refetch } = useQuery(UserQuery);
  console.log(loading, userData);
  console.log(data);

  return (
    <nav>
      {!loading && (
        <div className='nav-wrapper'>
          <a href='#' onClick={() => history.push('/')} className='brand-logo'>
            Logo
          </a>
          <ul id='nav-mobile' className='right'>
            {!userData.user && (
              <li>
                <a onClick={() => history.push('login')}>Login</a>
              </li>
            )}

            {!userData.user && (
              <li>
                <a onClick={() => history.push('signup')}>Sign up</a>
              </li>
            )}

            {userData.user && (
              <li>
                <a
                  href='#'
                  onClick={() => {
                    logout().then(() => refetch());
                  }}
                >
                  Logout
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Header;
