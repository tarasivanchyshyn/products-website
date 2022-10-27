import { useState } from 'react';
import 'antd/dist/antd.min.css';
import { Drawer } from 'antd';

import { getAllBrands, getCategoriesData } from 'helpers/dataGetters';
import { useAppDispatch } from 'hooks/redux';
import { IProduct } from 'models/IProduct';
import { productsAPI } from 'services/ProductsService';
import { productsActions } from 'store/reducers/ProductsSlice';
import { productsOnPage } from '@constants';
import Categories from '@components/Products/Main/Filters/Categories/Categories';
import Brands from '@components/Products/Main/Filters/Brands/Brands';
import Ratings from '@components/Products/Main/Filters/Ratings/Ratings';
import Price from '@components/Products/Main/Filters/Price/Price';
import Button from '../Button/Button';

import classes from './FiltersModal.module.scss';

interface FiltersModalProps {
  open: boolean;
  onClose: () => void;
}

const FiltersModal = ({ open, onClose }: FiltersModalProps) => {
  const { data: products } = productsAPI.useFetchAllProductsQuery();
  const dispatch = useAppDispatch();

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
      <Drawer placement={'left'} closable={false} onClose={onClose} open={open}>
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
            <Button className={classes.actions__close} onClick={onClose}>
              Close
            </Button>
          </section>
        </aside>
      </Drawer>
    </>
  );
};

export default FiltersModal;
