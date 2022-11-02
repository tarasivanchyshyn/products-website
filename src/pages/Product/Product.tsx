import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query';
import { SerializedError } from '@reduxjs/toolkit';

import Spinner from '@components/UI/Spinner/Spinner';
import LoadingError from '@components/UI/LoadingError/LoadingError';
import Main from '@components/Product/Main/Main';
import { IProduct } from 'models/IProduct';

interface ProductProps {
  data: {
    products?: IProduct[];
    isLoading: boolean;
    error?: FetchBaseQueryError | SerializedError;
    productsCount?: number;
  };
}

const Product = ({ data }: ProductProps) => {
  const { productTitle } = useParams();
  const { products, isLoading, error } = data;

  const product = products?.find(
    (el) => el.title.toLowerCase() === productTitle
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {isLoading && <Spinner />}
      {error && <LoadingError>Error occured</LoadingError>}
      {!isLoading && !error && <Main product={product} />}
    </>
  );
};

export default Product;
