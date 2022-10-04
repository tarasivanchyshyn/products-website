import { NavLink } from 'react-router-dom';

import { productsURL, checkoutURL, homeURL } from '@constants';

import classes from './Header.module.scss';

function Header() {
  const { list, link, active } = classes;

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? active : '';

  return (
    <header>
      <nav>
        <ul className={list}>
          <li className={link}>
            <NavLink className={setActive} to={homeURL} end>
              Home
            </NavLink>
          </li>
          <li className={link}>
            <NavLink className={setActive} to={productsURL}>
              Products
            </NavLink>
          </li>
          <li className={link}>
            <NavLink className={setActive} to={checkoutURL}>
              Checkout
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
