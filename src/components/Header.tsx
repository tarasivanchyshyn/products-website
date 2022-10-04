import { NavLink } from 'react-router-dom';

import { productsURL, productURL, checkoutURL } from '@constants';

import classes from './Header.module.scss';

function Header() {
  const { list, link, active } = classes;

  return (
    <header>
      <nav>
        <ul className={list}>
          <li className={link}>
            <NavLink
              className={(navData) => (navData.isActive ? active : '')}
              to={productsURL}
            >
              Products
            </NavLink>
          </li>
          <li className={link}>
            <NavLink
              className={(navData) => (navData.isActive ? active : '')}
              to={productURL}
            >
              Product
            </NavLink>
          </li>
          <li className={link}>
            <NavLink
              className={(navData) => (navData.isActive ? active : '')}
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
