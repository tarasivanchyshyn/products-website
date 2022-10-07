import { Link } from 'react-router-dom';

import ProductCard from './ProductCard/ProductCard';
import { mockedProducts as products } from 'mockedData';

function ProductCards() {
  return (
    <div>
      ProductCards
      <ProductCard />
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductCards;
