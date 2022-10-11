import Card from './Card/Card';
import { productsAPI } from 'services/ProductsService';

import classes from './ProductCards.module.scss';

function ProductCards() {
  const {
    data: products,
    isLoading,
    error
  } = productsAPI.useFetchAllProductsQuery(2);

  return (
    <div className={classes.cards}>
      <ul>
        {isLoading && <h1>Downloading...</h1>}
        {error && <h1>Error occured</h1>}
        {products &&
          products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
      </ul>
    </div>
  );
}

export default ProductCards;
