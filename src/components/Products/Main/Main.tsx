import Filters from './Filters/Filters';
import ProductCards from './ProductCards/ProductCards';

import classes from './Main.module.scss';

function Main() {
  return (
    <div className={classes.main}>
      <Filters />
      <ProductCards />
    </div>
  );
}

export default Main;
