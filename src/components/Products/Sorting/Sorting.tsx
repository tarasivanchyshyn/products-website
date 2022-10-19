import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faSortUp, faSortDown } from '@fortawesome/free-solid-svg-icons';

import { useAppDispatch } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';
import { ascendOrder, descendOrder, defaultSortTitle } from '@constants';
import { byTitle, byPrice, byRating } from '@constants';

import classes from './Sorting.module.scss';

function Sorting() {
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
            <ul className={classes.sort__dropdownList}>
              <li
                className={classes.sort__dropdownItem}
                onClick={() => chooseSortingHandler(byTitle, ascendOrder)}
              >
                <div className={classes.sort__dropdownItemTitle}>Title</div>
                <div className={classes.sort__dropdownItemIconUp}>
                  <FontAwesomeIcon icon={faSortUp} />
                </div>
              </li>
              <li
                className={classes.sort__dropdownItem}
                onClick={() => chooseSortingHandler(byTitle, descendOrder)}
              >
                <div className={classes.sort__dropdownItemTitle}>Title</div>
                <div className={classes.sort__dropdownItemIconDown}>
                  <FontAwesomeIcon icon={faSortDown} />
                </div>
              </li>
              <li
                className={classes.sort__dropdownItem}
                onClick={() => chooseSortingHandler(byPrice, ascendOrder)}
              >
                <div className={classes.sort__dropdownItemTitle}>Price</div>
                <div className={classes.sort__dropdownItemIconUp}>
                  <FontAwesomeIcon icon={faSortUp} />
                </div>
              </li>
              <li
                className={classes.sort__dropdownItem}
                onClick={() => chooseSortingHandler(byPrice, descendOrder)}
              >
                <div className={classes.sort__dropdownItemTitle}>Price</div>
                <div className={classes.sort__dropdownItemIconDown}>
                  <FontAwesomeIcon icon={faSortDown} />
                </div>
              </li>
              <li
                className={classes.sort__dropdownItem}
                onClick={() => chooseSortingHandler(byRating, ascendOrder)}
              >
                <div className={classes.sort__dropdownItemTitle}>Rating</div>
                <div className={classes.sort__dropdownItemIconUp}>
                  <FontAwesomeIcon icon={faSortUp} />
                </div>
              </li>
              <li
                className={classes.sort__dropdownItem}
                onClick={() => chooseSortingHandler(byRating, descendOrder)}
              >
                <div className={classes.sort__dropdownItemTitle}>Rating</div>
                <div className={classes.sort__dropdownItemIconDown}>
                  <FontAwesomeIcon icon={faSortDown} />
                </div>
              </li>
              <li className={classes.sort__dropdownItem} onClick={resetHandler}>
                <div>Reset</div>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Sorting;
