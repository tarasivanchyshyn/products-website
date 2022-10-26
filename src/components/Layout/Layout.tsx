import { Outlet } from 'react-router-dom';

import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import { IProduct } from 'models/IProduct';

interface LayoutProps {
  products?: IProduct[];
}

const Layout = ({ products }: LayoutProps) => {
  return (
    <>
      <Header products={products} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
