import { Link } from 'react-router-dom';

import { mockedProducts } from 'mockedData';
import Card from './Card/Card';

import classes from './ProductCards.module.scss';

function ProductCards() {
  return (
    <div className={classes.cards}>
      <ul>
        {/* {mockedProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))} */}
        <Card />
        <Card />
      </ul>
    </div>
  );
}

export default ProductCards;
