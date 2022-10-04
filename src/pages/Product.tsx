import { useParams } from 'react-router-dom';

import { mockedProducts } from '@constants';

function Product() {
  const { productId } = useParams();

  const product = mockedProducts.find((el) => el.id === productId);

  return <h1>{product?.title}</h1>;
}

export default Product;
