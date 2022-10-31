import { IProduct } from 'models/IProduct';
import { useParams } from 'react-router-dom';

import BreadCrumbs from '@components/Product/BreadCrumbs/BreadCrumbs';
import Main from '@components/Product/Main/Main';
import { useEffect } from 'react';

interface ProductProps {
  products?: IProduct[];
}

const Product = ({ products }: ProductProps) => {
  const { productTitle } = useParams();

  const product = products?.find(
    (el) => el.title.toLowerCase() === productTitle
  );
  const title = product?.title;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BreadCrumbs productTitle={title} />
      <Main product={product} />
    </>
  );
};

export default Product;
