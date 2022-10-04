import { Route, Routes } from 'react-router-dom';

import Products from '@pages/Products';
import Product from '@pages/Product';
import Checkout from '@pages/Checkout';
import Home from '@pages/Home';
import NotFound from '@pages/NotFound';
import Layout from '@components/Layout';
import { productsURL, productURL, checkoutURL } from '@constants';
import { notFoundURL } from '@constants';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={productsURL} element={<Products />} />
          <Route path={productURL} element={<Product />} />
          <Route path={checkoutURL} element={<Checkout />} />
          <Route path={notFoundURL} element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
