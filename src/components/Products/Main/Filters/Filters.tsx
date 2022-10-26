import { FC, useState } from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.min.css';

import RatingItem from './RatingItem/RatingItem';
import { getAllFarms, getCategoriesData } from 'helpers/dataGetters';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IProduct } from 'models/IProduct';
import { productsAPI } from 'services/ProductsService';
import { productsActions } from 'store/reducers/ProductsSlice';
import { productsOnPage, ratings } from '@constants';

import classes from './Filters.module.scss';

interface FilterProps {
  products?: IProduct[];
}

const Filters: FC<FilterProps> = () => {
  const { data: products } = productsAPI.useFetchAllProductsQuery();
  const dispatch = useAppDispatch();

  const { searchCategory, choosedBrands } = useAppSelector(
    (state) => state.productsReducer
  );

  const prices = products?.map((product: IProduct) => product.price);
  const maxPrice = Math.max(...prices!);
  const minPrice = Math.min(...prices!);

  const [min, setMin] = useState(minPrice);
  const [max, setMax] = useState(maxPrice);
  const onChange = (value: number[]) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  const categories = getCategoriesData(products);
  const brands = getAllFarms(products);

  const setDefaultValues = () => {
    dispatch(productsActions.setCurrentPage(0));
    dispatch(productsActions.setProductsPerPage(productsOnPage));
    dispatch(productsActions.setActivePages([0]));
  };

  const chooseCategoryHandler = (category: string) => {
    dispatch(productsActions.searchCategory(category));
    setDefaultValues();
  };

  const chooseBrandHandler = (brand: string) => {
    dispatch(productsActions.chooseBrands(brand));
    setDefaultValues();
  };

  const choosePriceHandler = (value: number[]) => {
    dispatch(productsActions.choosePrice(value));
    setDefaultValues();
  };

  const resetHandler = () => {
    dispatch(productsActions.resetFilters());
    setMin(minPrice);
    setMax(maxPrice);
    dispatch(productsActions.setCurrentPage(0));
    dispatch(productsActions.setProductsPerPage(productsOnPage));
  };

  return (
    <aside className={classes.filters}>
      <section className={classes.categories}>
        <h3 className={classes.categories__header}>Categories</h3>
        <ul className={classes.categories__list}>
          {categories.map(({ name, amount }) => (
            <li
              className={`${classes.categories__item} ${
                searchCategory === name ? classes.active : ''
              }`}
              key={name}
              onClick={() => chooseCategoryHandler(name)}
            >
              <span className={classes.categories__itemName}>{name}</span>
              <span className={classes.categories__itemNumber}>{amount}</span>
            </li>
          ))}
        </ul>
      </section>
      <section className={classes.brands}>
        <h3 className={classes.brands__header}>Brands</h3>
        <ul className={classes.brands__list}>
          {brands.map((brand) => (
            <li className={classes.brands__item} key={brand}>
              <input
                className={classes.brands__itemCheckbox}
                type="checkbox"
                id={brand}
                checked={choosedBrands.includes(brand)}
                onChange={() => chooseBrandHandler(brand)}
              />
              <label htmlFor={brand} className={classes.brands__itemName}>
                {brand}
              </label>
            </li>
          ))}
        </ul>
      </section>
      <section className={classes.rating}>
        <h3 className={classes.rating__header}>Rating</h3>
        <ul className={classes.rating__list}>
          {ratings.map((rating) => (
            <RatingItem rating={rating} key={rating} />
          ))}
        </ul>
      </section>
      <section className={classes.price}>
        <h3 className={classes.price__header}>Price</h3>
        <Slider
          range
          min={minPrice}
          max={maxPrice}
          step={0.01}
          value={[min, max]}
          onChange={onChange}
          onAfterChange={choosePriceHandler}
          className={classes.slider}
        />
        <div className={classes.price__inputs}>
          <div className={classes.price__input}>
            <label htmlFor="min">Min</label>
            <input type="text" id="min" value={min} readOnly />
          </div>
          <div className={classes.price__dash}>-</div>
          <div className={classes.price__input}>
            <label htmlFor="max">Max</label>
            <input type="text" id="max" value={max} readOnly />
          </div>
        </div>
      </section>
      <section className={classes.actions}>
        <button className={classes.actions__reset} onClick={resetHandler}>
          Reset
        </button>
      </section>
    </aside>
  );
};

export default Filters;
