import { Category } from 'helpers/dataGetters';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';
import GreenInfoOval from '@components/UI/GreenInfoOval/GreenInfoOval';

import classes from './Categories.module.scss';

interface CategoriesProps {
  categories: Category[];
  setDefaultValues: () => void;
}

const Categories = ({ categories, setDefaultValues }: CategoriesProps) => {
  const dispatch = useAppDispatch();
  const { searchCategory } = useAppSelector((state) => state.productsReducer);

  const chooseCategoryHandler = (category: string) => {
    dispatch(productsActions.searchCategory(category));
    setDefaultValues();
  };

  return (
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
            <GreenInfoOval>{amount}</GreenInfoOval>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Categories;
