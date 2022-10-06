import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Dropdown from '@components/UI/Dropdown';
import logo from '@assets/logo.svg';
import user from '@assets/user.svg';
import cart from '@assets/cart.svg';
import { checkoutURL, homeURL } from '@constants';
import { searchPlaceholder, productsURL } from '@constants';
import { dropdownsHeaders } from 'mockedData';

import classes from './Header.module.scss';

function Header() {
  const { list, link, active } = classes;

  const setActive = ({ isActive }: { isActive: boolean }) =>
    isActive ? active : '';

  const { header, info, info__left, info__right, line, main } = classes;
  const { main__top, main__bottom, main__logo, main__search } = classes;
  const { main__categories, main__divider, main__input } = classes;
  const { main__icons, main__cart, info__link, info__info } = classes;

  return (
    <header className={header}>
      <div className={info}>
        <div className={info__left}>
          <Link to={'#'} className={info__link}>
            Chat with us
          </Link>
          <a className={info__info} href="tel:+420336775664">
            +420 336 775 664
          </a>
          <a className={info__info} href="mailto:info@freshnesecom.com">
            info@freshnesecom.com
          </a>
        </div>
        <div className={info__right}>
          <Link to={'#'} className={info__link}>
            Blog
          </Link>
          <Link to={'#'} className={info__link}>
            About Us
          </Link>
          <Link to={'#'} className={info__link}>
            Careers
          </Link>
        </div>
      </div>
      <hr className={line} />
      <div className={main}>
        <div className={main__top}>
          <div className={main__logo}>
            <Link to={homeURL}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className={main__search}>
            <div className={main__categories}>
              <Dropdown header="All categories" />
              <div className={main__divider}></div>
            </div>
            <div className={main__input}>
              <input type="text" placeholder={searchPlaceholder} />
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
          </div>
          <div className={main__icons}>
            <img src={user} alt="User" />
            <div className={main__cart}>
              <Link to={checkoutURL}>
                <img src={cart} alt="Cart" />
                <span>4</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={main__bottom}>
          {dropdownsHeaders.map((el) => {
            return <Dropdown key={el} header={el} />;
          })}
        </div>
      </div>

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
