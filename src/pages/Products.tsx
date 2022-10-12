import BreadCrumbs from '@components/Products/BreadCrumbs/BreadCrumbs';
import Header from '@components/Products/Header/Header';
import Sorting from '@components/Products/Sorting/Sorting';
import Main from '@components/Products/Main/Main';

import { productsAPI } from 'services/ProductsService';
import { useAppSelector } from 'hooks/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import classes from './Products.module.scss';

function Products() {
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

  const { message, spinner } = classes;

  return (
    <>
      <BreadCrumbs />
      <Header products={products} />
      <Sorting />
      {isLoading && (
        <div className={spinner}>
          <FontAwesomeIcon icon={faSpinner} spinPulse />
        </div>
      )}
      {error && <h2 className={message}>Error occured</h2>}
      {!isLoading && !error && <Main products={products} />}
    </>
  );
}

export default Products;
