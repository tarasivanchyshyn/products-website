import { Outlet, useLocation } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import BreadCrumb from '@components/BreadCrumb/BreadCrumb';
import { IProduct } from 'models/IProduct';

interface LayoutProps {
  products?: IProduct[];
}

const Layout = ({ products }: LayoutProps) => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <>
      <Header products={products} />
      {path !== '/' && <BreadCrumb />}
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
