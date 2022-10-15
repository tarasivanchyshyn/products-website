import { ReactComponent as StarSmallGold } from '@assets/star-small-gold.svg';
import { ReactComponent as StarSmallWhite } from '@assets/star-small-white.svg';
import { getBrandsData, getCategoriesData } from 'helpers/dataGetters';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { IProduct } from 'models/IProduct';
import { FC } from 'react';
import { productsAPI } from 'services/ProductsService';
import { productsActions } from 'store/reducers/ProductsSlice';

import classes from './Filters.module.scss';

interface FilterProps {
  products?: IProduct[];
}

const Filters: FC<FilterProps> = () => {
  const { data: products } = productsAPI.useFetchAllProductsQuery(2);
  const dispatch = useAppDispatch();

  const choosedCategory = useAppSelector(
    (state) => state.productsReducer.searchCategory
  );

  const categories = getCategoriesData(products);
  const brands = getBrandsData(products);

  const chooseCategoryHandler = (category: string) => {
    dispatch(productsActions.searchCategory(category));
    dispatch(productsActions.chooseFarm(''));
  };

  const chooseBrandHandler = (brand: string) => {
    dispatch(productsActions.chooseBrands(brand));
  };

  return (
    <aside className={classes.filters}>
      <section className={classes.categories}>
        <h3 className={classes.categories__header}>Categories</h3>
        <ul className={classes.categories__list}>
          {categories.map(({ name, amount }) => (
            <li
              className={`${classes.categories__item} ${
                choosedCategory === name ? classes.active : ''
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
          {brands.map(({ brand }) => (
            <li className={classes.brands__item} key={brand}>
              <input
                className={classes.brands__itemCheckbox}
                type="checkbox"
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
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
            </ul>
          </li>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallWhite />
              </li>
            </ul>
          </li>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
            </ul>
          </li>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
            </ul>
          </li>
          <li className={classes.rating__item}>
            <input type="checkbox" className={classes.rating__itemCheckbox} />
            <ul className={classes.rating__itemStars}>
              <li>
                <StarSmallGold />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
              <li>
                <StarSmallWhite />
              </li>
            </ul>
          </li>
        </ul>
      </section>
    </aside>
  );
};

export default Filters;
