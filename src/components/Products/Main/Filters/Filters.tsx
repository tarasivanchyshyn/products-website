import { FC, useState } from 'react';
import { Slider } from 'antd';
import 'antd/dist/antd.min.css';

import { getAllFarms, getCategoriesData } from 'helpers/dataGetters';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IProduct } from 'models/IProduct';
import { productsAPI } from 'services/ProductsService';
import { productsActions } from 'store/reducers/ProductsSlice';
import { ratings } from '@constants';
import RatingItem from './RatingItem';

import classes from './Filters.module.scss';

interface FilterProps {
  products?: IProduct[];
}

const Filters: FC<FilterProps> = () => {
  const { data: products } = productsAPI.useFetchAllProductsQuery(2);
  const dispatch = useAppDispatch();

  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const onChange = (value: number[]) => {
    setMin(value[0]);
    setMax(value[1]);
  };

  const { searchCategory, choosedBrands } = useAppSelector(
    (state) => state.productsReducer
  );

  const prices = products?.map((product: IProduct) => product.price);
  const maxPrice = Math.max(...prices!);

  const categories = getCategoriesData(products);
  const brands = getAllFarms(products);

  const chooseCategoryHandler = (category: string) =>
    dispatch(productsActions.searchCategory(category));

  const chooseBrandHandler = (brand: string) =>
    dispatch(productsActions.chooseBrands(brand));

  const choosePriceHandler = (value: number[]) =>
    dispatch(productsActions.choosePrice(value));

  const resetHandler = () => {
    dispatch(productsActions.reset());
    setMin(0);
    setMax(0);
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
                checked={choosedBrands.includes(brand) ? true : false}
                onChange={() => chooseBrandHandler(brand)}
              />
              <span className={classes.brands__itemName}>{brand}</span>
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
          min={0}
          max={maxPrice}
          step={0.01}
          defaultValue={[1, 2]}
          onChange={onChange}
          onAfterChange={choosePriceHandler}
          className={classes.slider}
        />
        <div className={classes.price__inputs}>
          <div className={classes.price__input}>
            <label htmlFor="min">Min</label>
            <input type="text" id="min" placeholder="0" value={min} readOnly />
          </div>
          <div className={classes.price__dash}>-</div>
          <div className={classes.price__input}>
            <label htmlFor="max">Max</label>
            <input type="text" id="max" placeholder="0" value={max} readOnly />
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
