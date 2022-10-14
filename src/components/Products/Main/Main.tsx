import { FC } from 'react';

import ProductCards from './ProductCards/ProductCards';
import Filters from './Filters/Filters';
import { IProduct } from 'models/IProduct';

import classes from './Main.module.scss';

interface MainProps {
  products?: IProduct[];
}

const Main: FC<MainProps> = ({ products }) => {
  const content = !products?.length ? (
    <h1 className={classes.message}>No products</h1>
  ) : (
    <div className={classes.main}>
      <Filters products={products} />
      <ProductCards products={products} />
    </div>
  );

  return content;
};

export default Main;
