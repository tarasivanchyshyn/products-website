import { useParams } from 'react-router-dom';

function Product() {
  const params = useParams();

  return (
    <section>
      <h1>Product</h1>
      <p>{params.productId}</p>
    </section>
  );
}

export default Product;
