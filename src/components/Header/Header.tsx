import { Link } from 'react-router-dom';

import Info from '@components/Header/Info/Info';
import Search from '@components/Header/Search/Search';
import Dropdown from '@components/UI/Dropdown/Dropdown';
import logo from '@assets/logo.svg';
import user from '@assets/user.svg';
import cart from '@assets/cart.svg';
import { checkoutURL, homeURL } from '@constants';
import { IProduct } from 'models/IProduct';
import { getAllBrands, getCategoriesData } from 'helpers/dataGetters';
import { useAppSelector } from 'hooks/redux';

import classes from './Header.module.scss';

interface HeaderProps {
  products?: IProduct[];
}

const Header = ({ products }: HeaderProps) => {
  const brands = getAllBrands(products);
  const categories = getCategoriesData(products);
  const productsInCart = useAppSelector(
    (state) => state.productsReducer.cartItemsCount
  );

  const dropdowns = categories.map(({ name }) => (
    <li key={name}>
      <Dropdown header={name} options={brands} />
    </li>
  ));

  return (
    <header className={classes.header}>
      <Info />
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
                {productsInCart > 0 && <span>{productsInCart}</span>}
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
