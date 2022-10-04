import { Route, Routes } from 'react-router-dom';

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
        <Routes>
          <Route path={productsURL} element={<Products />} />
          <Route path={productURL} element={<Product />} />
          <Route path={checkoutURL} element={<Checkout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
