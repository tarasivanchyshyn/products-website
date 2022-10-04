import { Route, Routes } from 'react-router-dom';

import Header from '@components/Header';
import Products from '@pages/Products';
import Product from '@pages/Product';
import Checkout from '@pages/Checkout';
import Home from '@pages/Home';
import { productsURL, productURL, checkoutURL, homeURL } from '@constants';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path={homeURL} element={<Home />} />
          <Route path={productsURL} element={<Products />} />
          <Route path={productURL} element={<Product />} />
          <Route path={checkoutURL} element={<Checkout />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
