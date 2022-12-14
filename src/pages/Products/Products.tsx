import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

import Header from '@components/Products/Header/Header';
import Sorting from '@components/Products/Sorting/Sorting';
import Main from '@components/Products/Main/Main';
import Footer from '@components/Products/Footer/Footer';
import Spinner from '@components/UI/Spinner/Spinner';
import LoadingError from '@components/UI/LoadingError/LoadingError';
import { useAppSelector } from 'hooks/redux';
import { allCategories, productsOnPage } from '@constants';
import { IProduct } from 'models/IProduct';
import productsSorter from 'helpers/productsSorter';

interface ProductsProps {
  data: {
    products?: IProduct[];
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    productsCount?: number;
  };
}

const Products = ({ data }: ProductsProps) => {
  const { isLoading, error, productsCount } = data;
  let { products } = data;

  const {
    searchCategory,
    choosedBrands,
    choosedRatings,
    choosedPrice,
    searchValue,
    sortOption,
    currentPage,
    productsPerPage
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

  const pages = [];
  if (products) {
    for (let i = 1; i <= Math.ceil(products.length / productsOnPage); i++) {
      pages.push(i);
    }
  }
  const pagesVisited = currentPage * productsOnPage;
  products = products?.slice(pagesVisited, pagesVisited + productsPerPage);

  const productsLeft =
    productsCount && products && productsCount - products.length;

  return (
    <>
      <Header productsCount={productsCount} />
      {isLoading && <Spinner />}
      {error && <LoadingError>Error occured</LoadingError>}
      {!isLoading && !error && (
        <>
          <Sorting />
          <Main products={products} />
          <Footer pages={pages} productsLeft={productsLeft!} />
        </>
      )}
    </>
  );
};

export default Products;
