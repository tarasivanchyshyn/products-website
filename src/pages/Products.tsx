import { FC, useState } from 'react';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

import BreadCrumbs from '@components/Products/BreadCrumbs/BreadCrumbs';
import Header from '@components/Products/Header/Header';
import Sorting from '@components/Products/Sorting/Sorting';
import Main from '@components/Products/Main/Main';
import Footer from '@components/Products/Footer/Footer';
import { useAppSelector } from 'hooks/redux';
import { allCategories, productsOnPage } from '@constants';
import { IProduct } from 'models/IProduct';
import productsSorter from 'helpers/productsSorter';

import classes from './Products.module.scss';

interface ProductsProps {
  data: {
    products?: IProduct[];
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    productsCount?: number;
  };
}

const Products: FC<ProductsProps> = ({ data }) => {
  const { isLoading, error, productsCount } = data;
  let { products } = data;

  const {
    searchCategory,
    choosedBrands,
    choosedRatings,
    choosedPrice,
    searchValue,
    sortOption
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
  if (sortOption && products) {
    products = productsSorter(products, sortOption);
  }

  const loadingSpinner = (
    <div className={classes.spinner}>
      <FontAwesomeIcon icon={faSpinner} spinPulse />
    </div>
  );
  const errMessage = <h2 className={classes.message}>Error occured</h2>;

  const [pageNumber, setPageNumber] = useState(0);
  const [productsPerPage, setProductsPerPage] = useState(productsOnPage);
  const pagesVisited = pageNumber * productsPerPage;
  const pageCount = products && Math.ceil(products.length / productsPerPage);

  products = products?.slice(pagesVisited, pagesVisited + productsPerPage);

  const onPageChange = (selected: number) => setPageNumber(selected);
  const addMoreProductsOnPage = () => {
    setPageNumber(0);
    setProductsPerPage(productsPerPage + productsOnPage);
  };
  const productsLeft =
    productsCount && products && productsCount - products.length;

  return (
    <>
      <BreadCrumbs />
      <Header productsCount={productsCount} />
      {isLoading && loadingSpinner}
      {error && errMessage}
      {!isLoading && !error && (
        <>
          <Sorting />
          <Main products={products} />
          <Footer
            pageCount={pageCount!}
            onPageChange={onPageChange}
            addMoreProductsOnPage={addMoreProductsOnPage}
            productsLeft={productsLeft!}
          />
        </>
      )}
    </>
  );
};

export default Products;
