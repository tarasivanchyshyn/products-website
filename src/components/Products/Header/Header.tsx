import { FC } from 'react';

import { IProduct } from 'models/IProduct';
import classes from './Header.module.scss';

interface HeaderProps {
  products?: IProduct[];
}

const Header: FC<HeaderProps> = ({ products }) => {
  const amountNumber = products?.length;
  const amaountHeaderName = products?.length === 1 ? 'Product' : 'Products';

  return (
    <div className={classes.header}>
      <h1>All products</h1>
      <div className={classes.header__amount}>
        <div className={classes.header__number}>
          <span>{amountNumber}</span>
        </div>
        <span className={classes.header__name}>{amaountHeaderName}</span>
      </div>
    </div>
  );
};

export default Header;
