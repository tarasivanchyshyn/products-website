import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';

import classes from './Brands.module.scss';

interface BrandsProps {
  brands: string[];
  setDefaultValues: () => void;
}

const Brands = ({ brands, setDefaultValues }: BrandsProps) => {
  const dispatch = useAppDispatch();
  const { choosedBrands } = useAppSelector((state) => state.productsReducer);

  const chooseBrandHandler = (brand: string) => {
    dispatch(productsActions.chooseBrands(brand));
    setDefaultValues();
  };

  return (
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
  );
};

export default Brands;
