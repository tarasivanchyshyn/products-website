import { Route } from 'react-router-dom';

import Header from '@components/Header';
import Products from '@pages/Products';
import Product from '@pages/Product';
import Checkout from '@pages/Checkout';
import { productsURL, productURL, checkoutURL } from '@constants';

function App() {
  return (
    <>
      <Header />
      <main>
        <Route exact path={productsURL} component={Products} />
        <Route path={productURL} component={Product} />
        <Route path={checkoutURL} component={Checkout} />
      </main>
    </>
  );
}

export default App;
