import { FC, FormEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import SearchDropdown from '@components/UI/SearchDropdown';
import { productsActions } from 'store/reducers/ProductsSlice';
import { useAppDispatch } from 'hooks/redux';
import { allCategories, searchPlaceholder } from '@constants';
import { getAllCategories } from 'helpers/dataGetters';
import { IProduct } from 'models/IProduct';

import classes from './Search.module.scss';

interface SearchProps {
  products?: IProduct[];
}

const Search: FC<SearchProps> = ({ products }) => {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();

  const categories = getAllCategories(products);
  categories.unshift(allCategories);

  const inputChangeHandler = (e: FormEvent<HTMLInputElement>) =>
    setSearchValue(e.currentTarget.value);

  useEffect(() => {
    const debounce = setTimeout(() => {
      dispatch(productsActions.search(searchValue));
    }, 500);

    return () => {
      clearTimeout(debounce);
    };
  }, [searchValue, dispatch]);

  return (
    <div className={classes.main__search}>
      <div className={classes.main__categories}>
        <SearchDropdown options={categories} />
        <div className={classes.main__divider}></div>
      </div>
      <div className={classes.main__inputContainer}>
        <input
          type="text"
          placeholder={searchPlaceholder}
          value={searchValue}
          onChange={inputChangeHandler}
        />
        <FontAwesomeIcon icon={faMagnifyingGlass} />
      </div>
    </div>
  );
};

export default Search;
