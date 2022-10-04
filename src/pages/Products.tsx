import { Link } from 'react-router-dom';

import { mockedProducts as products } from '@constants';

function Products() {
  return (
    <>
      <h1>All Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}

export default Products;
