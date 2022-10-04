import { useParams } from 'react-router-dom';

import ProducInfo from '@components/Product/ProducInfo';
import { mockedProducts } from '@constants';
import Recomended from '@components/Product/Recomended';

function Product() {
  const { productId } = useParams();

  const product = mockedProducts.find((el) => el.id === productId);

  return (
    <div>
      <h1>{product?.title}</h1>
      <ProducInfo />
      <Recomended />
    </div>
  );
}

export default Product;
