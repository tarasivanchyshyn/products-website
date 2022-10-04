import { NavLink } from 'react-router-dom';

import { productsURL, checkoutURL, homeURL } from '@constants';

import classes from './Header.module.scss';

function Header() {
  const { list, link, active } = classes;

  return (
    <header>
      <nav>
        <ul className={list}>
          <li className={link}>
            <NavLink
              className={({ isActive }) => (isActive ? active : '')}
              to={homeURL}
              end
            >
              Home
            </NavLink>
          </li>
          <li className={link}>
            <NavLink
              className={({ isActive }) => (isActive ? active : '')}
              to={productsURL}
            >
              Products
            </NavLink>
          </li>
          <li className={link}>
            <NavLink
              className={({ isActive }) => (isActive ? active : '')}
              to={checkoutURL}
            >
              Checkout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
