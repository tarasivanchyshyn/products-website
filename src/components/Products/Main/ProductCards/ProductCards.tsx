import { FC } from 'react';

import Card from './Card/Card';
import { IProduct } from 'models/IProduct';
import classes from './ProductCards.module.scss';

interface ProductCardsProps {
  products?: IProduct[];
}

const ProductCards: FC<ProductCardsProps> = ({ products }) => {
  return (
    <div className={classes.cards}>
      <ul>
        {products &&
          products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
      </ul>
    </div>
  );
};

export default ProductCards;
