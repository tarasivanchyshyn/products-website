import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { IProduct } from 'models/IProduct';
import Main from '@components/Product/Main/Main';

interface ProductProps {
  products?: IProduct[];
}

const Product = ({ products }: ProductProps) => {
  const { productTitle } = useParams();

  const product = products?.find(
    (el) => el.title.toLowerCase() === productTitle
  );

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Main product={product} />
    </>
  );
};

export default Product;
