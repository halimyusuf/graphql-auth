import React from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { createHashHistory } from 'history';
import logoutMutation from '../queries/logout';
import UserQuery from '../queries/currentUser';

const Header = (props) => {
  const history = createHashHistory();
  const [logout, { data }] = useMutation(logoutMutation);
  const { loading, error, data: userData } = useQuery(UserQuery);
  console.log(loading, userData);
  console.log(data);

  return (
    <nav>
      <div className='nav-wrapper'>
        <a href='#' onClick={() => history.push('/')} className='brand-logo'>
          Logo
        </a>
        <ul id='nav-mobile' className='right'>
          <li>
            <a href='#' onClick={() => history.go('/login')}>
              Login
            </a>
          </li>
          <li>
            <a href='#' onClick={() => logout()}>
              Logout
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
