import { Route, Routes } from 'react-router-dom';

import Products from '@pages/Products/Products';
import Product from '@pages/Product/Product';
import Checkout from '@pages/Checkout/Checkout';
import Home from '@pages/Home/Home';
import NotFound from '@pages/NotFound/NotFound';
import Layout from '@components/Layout/Layout';
import { productsURL, productURL, checkoutURL } from '@constants';
import { notFoundURL } from '@constants';
import { productsAPI } from 'services/ProductsService';

function App() {
  const {
    data: products,
    isLoading,
    error
  } = productsAPI.useFetchAllProductsQuery();

  const productsCount = products?.length;

  const data = { products, isLoading, error, productsCount };

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout products={products} />}>
          <Route index element={<Home />} />
          <Route path={productsURL} element={<Products data={data} />} />
          <Route path={productURL} element={<Product />} />
          <Route path={checkoutURL} element={<Checkout />} />
          <Route path={notFoundURL} element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
