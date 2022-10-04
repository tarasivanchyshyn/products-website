import Sorting from '@components/Products/Sorting';
import Categories from '@components/Products/Categories';
import Filters from '@components/Products/Filters';
import ProductCards from '@components/Products/ProductCards/ProductCards';
import Footer from '@components/Products/Footer';

function Products() {
  return (
    <>
      <h1>All Products</h1>
      <Sorting />
      <Categories />
      <Filters />
      <ProductCards />
      <Footer />
    </>
  );
}

export default Products;
