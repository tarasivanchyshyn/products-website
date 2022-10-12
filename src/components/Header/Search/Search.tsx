import { FormEvent, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

import Dropdown from '@components/UI/Dropdown';
import { productsActions } from 'store/reducers/ProductsSlice';
import { useAppDispatch } from 'hooks/redux';
import { searchPlaceholder } from '@constants';

import classes from './Search.module.scss';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useAppDispatch();

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
        <Dropdown header="All categories" />
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
}

export default Search;
