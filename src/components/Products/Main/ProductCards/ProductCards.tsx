import { FC } from 'react';

import Card from './Card/Card';
import { IProduct } from 'models/IProduct';
import classes from './ProductCards.module.scss';

interface ProductCardsProps {
  products?: IProduct[];
}

const ProductCards: FC<ProductCardsProps> = ({ products }) => {
  const content = !products?.length ? (
    <div className={classes.cards}>
      <h1 className={classes.message}>No products</h1>
    </div>
  ) : (
    <div className={classes.cards}>
      <ul>
        {products?.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </ul>
    </div>
  );

  return content;
};

export default ProductCards;
