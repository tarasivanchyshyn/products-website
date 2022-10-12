import { FC } from 'react';

import { IProduct } from 'models/IProduct';
import classes from './Header.module.scss';

interface HeaderProps {
  products?: IProduct[];
}

const Header: FC<HeaderProps> = ({ products }) => {
  return (
    <div className={classes.header}>
      <h1>All products</h1>
      <div className={classes.header__amount}>
        <div className={classes.header__number}>
          <span>{products?.length}</span>
        </div>
        <span className={classes.header__name}>
          {products && products?.length === 1 ? 'Product' : 'Products'}
        </span>
      </div>
    </div>
  );
};

export default Header;
