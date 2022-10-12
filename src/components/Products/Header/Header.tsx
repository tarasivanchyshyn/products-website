import classes from './Header.module.scss';

function Header() {
  return (
    <div className={classes.header}>
      <h1>All products</h1>
      <div className={classes.header__amount}>
        <div className={classes.header__number}>
          <span>117</span>
        </div>
        <span className={classes.header__name}>Products</span>
      </div>
    </div>
  );
}

export default Header;
