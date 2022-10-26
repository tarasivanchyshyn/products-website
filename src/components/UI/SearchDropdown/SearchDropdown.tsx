import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';

import classes from './SearchDropdown.module.scss';

type SearchDropdownProps = {
  options: string[];
};

const SearchDropdown = ({ options }: SearchDropdownProps) => {
  const [open, setOpen] = useState(false);
  const choosedCategory = useAppSelector(
    (state) => state.productsReducer.searchCategory
  );
  const dispatch = useAppDispatch();

  const toggleWindowHandler = () => setOpen(!open);

  const chooseOptionHandler = (option: string) => {
    toggleWindowHandler();
    dispatch(productsActions.searchCategory(option));
  };

  const { dropdown, select, select__header, select__icon, dropdown__item } =
    classes;

  const optionsList = (
    <ul className={dropdown}>
      {options?.map((option) => (
        <li
          className={dropdown__item}
          onClick={() => chooseOptionHandler(option)}
          key={option}
        >
          {option}
        </li>
      ))}
    </ul>
  );

  const icon = open ? faChevronUp : faChevronDown;

  return (
    <div
      className={classes.main}
      onMouseEnter={toggleWindowHandler}
      onMouseLeave={toggleWindowHandler}
    >
      <div className={select}>
        <span className={select__header}>{choosedCategory}</span>
        <FontAwesomeIcon icon={icon} className={select__icon} />
      </div>
      {open && optionsList}
    </div>
  );
};

export default SearchDropdown;
