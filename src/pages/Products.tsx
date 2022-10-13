import BreadCrumbs from '@components/Products/BreadCrumbs/BreadCrumbs';
import Header from '@components/Products/Header/Header';
import Sorting from '@components/Products/Sorting/Sorting';
import Main from '@components/Products/Main/Main';
import { productsAPI } from 'services/ProductsService';
import { useAppSelector } from 'hooks/redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import { allCategories } from 'mockedData';
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
  const searchCategory = useAppSelector(
    (state) => state.productsReducer.searchCategory
  );
  const choosedFarm = useAppSelector(
    (state) => state.productsReducer.choosedFarm
  );

  if (searchCategory && products) {
    products =
      searchCategory === allCategories
        ? products
        : products.filter((el) =>
            el.categories.includes(searchCategory.toLowerCase())
          );
  }

  if (choosedFarm && products) {
    products = products.filter((el) => el.farm === choosedFarm);
  }

  if (searchValue.trim() && products) {
    products = products.filter((el) =>
      el.title.toLowerCase().includes(searchValue.toLowerCase())
    );
  }

  const loadingSpinner = (
    <div className={classes.spinner}>
      <FontAwesomeIcon icon={faSpinner} spinPulse />
    </div>
  );
  const errMessage = <h2 className={classes.message}>Error occured</h2>;

  return (
    <>
      <BreadCrumbs />
      <Header products={products} />
      <Sorting />
      {isLoading && loadingSpinner}
      {error && errMessage}
      {!isLoading && !error && <Main products={products} />}
    </>
  );
}

export default Products;
