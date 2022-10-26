import { FC } from 'react';
import classes from './Header.module.scss';

interface HeaderProps {
  productsCount?: number;
}

const Header: FC<HeaderProps> = ({ productsCount }) => {
  return (
    <div className={classes.header}>
      <h1>All products</h1>
      <div className={classes.header__amount}>
        <div className={classes.header__number}>
          <span>{productsCount!}</span>
        </div>
        <span className={classes.header__name}>Products</span>
      </div>
    </div>
  );
};

export default Header;
