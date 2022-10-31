import GreenInfoOval from '@components/UI/GreenInfoOval/GreenInfoOval';
import classes from './Header.module.scss';

interface HeaderProps {
  productsCount?: number;
}

const Header = ({ productsCount }: HeaderProps) => {
  return (
    <div className={classes.header}>
      <h1>All products</h1>
      <div className={classes.header__amount}>
        <GreenInfoOval>{productsCount!}</GreenInfoOval>
        <span className={classes.header__name}>Products</span>
      </div>
    </div>
  );
};

export default Header;
