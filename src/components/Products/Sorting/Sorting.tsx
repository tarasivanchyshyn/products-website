import { FC, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';
import { ascendOrder, defaultSortTitle } from '@constants';
import DropdownList from './DropdownList/DropdownList';

import classes from './Sorting.module.scss';

const Sorting: FC = () => {
  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState(defaultSortTitle);
  const [selectedSortIcon, setSelectedSortIcon] =
    useState<IconDefinition | null>(null);
  const dispatch = useAppDispatch();

  const toggleWindowHandler = () => setOpen(!open);

  const chooseSortingHandler = (option: string, order: string) => {
    dispatch(productsActions.sortProducts([option, order]));
    order === ascendOrder
      ? setSelectedSortIcon(faSortUp)
      : setSelectedSortIcon(faSortDown);
    setTitle(option);
    toggleWindowHandler();
  };

  const resetHandler = () => {
    dispatch(productsActions.sortProducts([]));
    setSelectedSortIcon(null);
    setTitle(defaultSortTitle);
    toggleWindowHandler();
  };

  const icon = open ? faChevronUp : faChevronDown;
  const selectedSortIconClass =
    selectedSortIcon === faSortUp
      ? classes.sort__selectOrderIconUp
      : classes.sort__selectOrderIconDown;

  return (
    <div className={classes.wrapper}>
      <div
        className={classes.sort}
        onMouseEnter={toggleWindowHandler}
        onMouseLeave={toggleWindowHandler}
      >
        <span className={classes.sort__header}>Sort by</span>
        <div className={classes.sort__divider}></div>
        <div className={classes.sort__dropdown}>
          <div className={classes.sort__select}>
            {selectedSortIcon && (
              <FontAwesomeIcon
                icon={selectedSortIcon}
                className={selectedSortIconClass}
              />
            )}
            <span className={classes.sort__selectTitle}>{title}</span>
            <FontAwesomeIcon icon={icon} className={classes.sort__selectIcon} />
          </div>
          {open && (
            <DropdownList
              chooseSortingHandler={chooseSortingHandler}
              resetHandler={resetHandler}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Sorting;
