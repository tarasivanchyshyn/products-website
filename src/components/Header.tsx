import { Link } from 'react-router-dom';

import { productsURL, productURL, checkoutURL } from '@constants';

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li>
            <Link to={productsURL}>Products</Link>
          </li>
          <li>
            <Link to={productURL}>Product</Link>
          </li>
          <li>
            <Link to={checkoutURL}>Checkout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
