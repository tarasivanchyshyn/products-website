import { FC } from 'react';
import { Link } from 'react-router-dom';

import Search from '@components/Header/Search/Search';
import Dropdown from '@components/UI/Dropdown';
import logo from '@assets/logo.svg';
import user from '@assets/user.svg';
import cart from '@assets/cart.svg';
import { checkoutURL, homeURL } from '@constants';
import { IProduct } from 'models/IProduct';
import { getAllCategories, getAllFarms } from 'helpers/dataGetters';

import classes from './Header.module.scss';

interface HeaderProps {
  products?: IProduct[];
}

const Header: FC<HeaderProps> = ({ products }) => {
  const farms = getAllFarms(products);
  const categories = getAllCategories(products);

  const dropdowns = categories.map((el) => (
    <li key={el}>
      <Dropdown header={el} options={farms} />
    </li>
  ));

  return (
    <header className={classes.header}>
      <div className={classes.info}>
        <div className={classes.info__left}>
          <Link to={'#'} className={classes.info__link}>
            Chat with us
          </Link>
          <a className={classes.info__info} href="tel:+420336775664">
            +420 336 775 664
          </a>
          <a className={classes.info__info} href="mailto:info@freshnesecom.com">
            info@freshnesecom.com
          </a>
        </div>
        <div className={classes.info__right}>
          <Link to={'#'} className={classes.info__link}>
            Blog
          </Link>
          <Link to={'#'} className={classes.info__link}>
            About Us
          </Link>
          <Link to={'#'} className={classes.info__link}>
            Careers
          </Link>
        </div>
      </div>
      <hr className={classes.line} />
      <div className={classes.main}>
        <div className={classes.main__top}>
          <div className={classes.main__logo}>
            <Link to={homeURL}>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <Search products={products} />
          <div className={classes.main__icons}>
            <img src={user} alt="User" />
            <div className={classes.main__cart}>
              <Link to={checkoutURL}>
                <img src={cart} alt="Cart" />
                <span>4</span>
              </Link>
            </div>
          </div>
        </div>
        <div className={classes.main__bottom}>
          <ul className={classes.main__dropdowns}>{dropdowns}</ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
