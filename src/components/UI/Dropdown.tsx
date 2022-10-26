import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';

import classes from './Dropdown.module.scss';

type Dropdownprops = {
  header: string;
  options: string[];
};

const Dropdown: FC<Dropdownprops> = ({ header, options }) => {
  const [open, setOpen] = useState(false);
  const dispatch = useAppDispatch();

  const toggleWindowHandler = () => setOpen(!open);

  const chooseOptionHandler = (option: string) => {
    toggleWindowHandler();
    dispatch(productsActions.setCategory(header));
    dispatch(productsActions.chooseBrands(''));
    dispatch(productsActions.chooseBrands(option));
  };

  const { dropdown, button, button__header, button__icon, dropdown__item } =
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
      <button className={button}>
        <span className={button__header}>{header}</span>
        <FontAwesomeIcon icon={icon} className={button__icon} />
      </button>
      {open && optionsList}
    </div>
  );
};

export default Dropdown;
