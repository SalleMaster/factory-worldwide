import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className='nav'>
      <div className='nav-wrapper'>
        <div className='brand'>
          <NavLink exact to='/'>
            Factory Worldwide
          </NavLink>
        </div>
        <ul className='nav-list'>
          <li className='nav-list-item'>
            <NavLink exact to='/'>
              Home
            </NavLink>
          </li>
          <li className='nav-list-item'>
            <NavLink exact to='add-data-screen'>
              Add Data
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
