import { FC } from 'react';

import ProductCards from './ProductCards/ProductCards';
import Filters from './Filters/Filters';
import { IProduct } from 'models/IProduct';

import classes from './Main.module.scss';

interface MainProps {
  products?: IProduct[];
}

const Main: FC<MainProps> = ({ products }) => {
  return (
    <div className={classes.main}>
      <Filters />
      <ProductCards products={products} />
    </div>
  );
};

export default Main;
