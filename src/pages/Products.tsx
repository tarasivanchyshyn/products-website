import BreadCrumbs from '@components/Products/BreadCrumbs/BreadCrumbs';
import Header from '@components/Products/Header/Header';
import Sorting from '@components/Products/Sorting/Sorting';
import Main from '@components/Products/Main/Main';

function Products() {
  return (
    <>
      <BreadCrumbs />
      <Header />
      <Sorting />
      <Main />
    </>
  );
}

export default Products;
