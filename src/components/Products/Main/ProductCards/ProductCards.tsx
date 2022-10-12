import Card from './Card/Card';
import { productsAPI } from 'services/ProductsService';

import { useAppSelector } from 'hooks/redux';
import classes from './ProductCards.module.scss';

function ProductCards() {
  let {
    data: products,
    isLoading,
    error
  } = productsAPI.useFetchAllProductsQuery(2);

  const searchValue = useAppSelector(
    (state) => state.productsReducer.searchValue
  );

  if (searchValue.trim() && products) {
    products = products.filter((el) =>
      el.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  return (
    <div className={classes.cards}>
      {isLoading && <h1>Downloading...</h1>}
      {error && <h1>Error occured</h1>}
      <ul>
        {products &&
          products.map((product) => (
            <Card product={product} key={product.id} />
          ))}
      </ul>
    </div>
  );
}

export default ProductCards;
