import { FC } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { SerializedError } from '@reduxjs/toolkit';

import BreadCrumbs from '@components/Products/BreadCrumbs/BreadCrumbs';
import Header from '@components/Products/Header/Header';
import Sorting from '@components/Products/Sorting/Sorting';
import Main from '@components/Products/Main/Main';
import { useAppSelector } from 'hooks/redux';
import { allCategories } from '@constants';
import { IProduct } from 'models/IProduct';

import classes from './Products.module.scss';

interface ProductsProps {
  data: {
    products?: IProduct[];
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
  };
}

const Products: FC<ProductsProps> = ({ data }) => {
  const { isLoading, error } = data;
  let { products } = data;

  const {
    searchCategory,
    choosedBrands,
    choosedRatings,
    choosedPrice,
    searchValue
  } = useAppSelector((state) => state.productsReducer);

  if (searchCategory && products) {
    products =
      searchCategory === allCategories
        ? products
        : products.filter((el) => el.categories.includes(searchCategory));
  }
  if (choosedBrands.length && products) {
    products = products.filter((el) => choosedBrands.includes(el.farm));
  }
  if (choosedRatings.length && products) {
    products = products.filter((el) =>
      choosedRatings.includes(Math.round(el.rating))
    );
  }
  if (choosedPrice.length && products) {
    products = products.filter(
      (el) => el.price >= choosedPrice[0] && el.price <= choosedPrice[1]
    );
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
};

export default Products;
