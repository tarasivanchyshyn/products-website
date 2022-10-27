import { FC, useState } from 'react';
import 'antd/dist/antd.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter } from '@fortawesome/free-solid-svg-icons';

import { getAllBrands, getCategoriesData } from 'helpers/dataGetters';
import { useAppDispatch } from 'hooks/redux';
import { IProduct } from 'models/IProduct';
import { productsAPI } from 'services/ProductsService';
import { productsActions } from 'store/reducers/ProductsSlice';
import { productsOnPage } from '@constants';
import Categories from './Categories/Categories';
import Brands from './Brands/Brands';
import Ratings from './Ratings/Ratings';
import Price from './Price/Price';
import FiltersModal from '@components/UI/FiltersModal/FiltersModal';
import Button from '@components/UI/Button/Button';

import classes from './Filters.module.scss';

const Filters: FC = () => {
  const { data: products } = productsAPI.useFetchAllProductsQuery();
  const dispatch = useAppDispatch();

  const [open, setOpen] = useState(false);
  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  const prices = products?.map((product: IProduct) => product.price);
  const minPrice = Math.min(...prices!);
  const maxPrice = Math.max(...prices!);

  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);
  const onChange = (value: number[]) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  const categories = getCategoriesData(products);
  const brands = getAllBrands(products);

  const setDefaultValues = () => {
    dispatch(productsActions.setCurrentPage(0));
    dispatch(productsActions.setProductsPerPage(productsOnPage));
    dispatch(productsActions.setActivePages([0]));
  };

  const resetHandler = () => {
    dispatch(productsActions.resetFilters());
    setMin(minPrice);
    setMax(maxPrice);
    dispatch(productsActions.setCurrentPage(0));
    dispatch(productsActions.setProductsPerPage(productsOnPage));
  };

  const sliderData = { minPrice, maxPrice, min, max, onChange };

  return (
    <>
      <div className={classes.filtersBtn}>
        <Button onClick={openDrawer} icon={<FontAwesomeIcon icon={faFilter} />}>
          Filters
        </Button>
      </div>
      {open && <FiltersModal onClose={closeDrawer} open={open} />}
      <aside className={classes.filters}>
        <Categories
          categories={categories}
          setDefaultValues={setDefaultValues}
        />
        <Brands brands={brands} setDefaultValues={setDefaultValues} />
        <Ratings />
        <Price setDefaultValues={setDefaultValues} data={sliderData} />
        <section className={classes.actions}>
          <button className={classes.actions__reset} onClick={resetHandler}>
            Reset
          </button>
        </section>
      </aside>
    </>
  );
};

export default Filters;
