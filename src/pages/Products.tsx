import { Link } from 'react-router-dom';

function Products() {
  return (
    <>
      <h1>All Products</h1>
      <ul>
        <li>
          <Link to="/products/p1">Apple</Link>
        </li>
        <li>
          <Link to="/products/p2">Carrot</Link>
        </li>
        <li>
          <Link to="/products/p3">Mushroom</Link>
        </li>
      </ul>
    </>
  );
}

export default Products;
