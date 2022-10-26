import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSortDown, faSortUp } from '@fortawesome/free-solid-svg-icons';

import { ascendOrder, descendOrder } from '@constants';
import { byPrice, byRating, byTitle } from '@constants';

import classes from './DropdownList.module.scss';

interface DropdownListProps {
  chooseSortingHandler: (option: string, order: string) => void;
  resetHandler: () => void;
}

const DropdownList = (props: DropdownListProps) => {
  const { chooseSortingHandler, resetHandler } = props;

  const ascendIcon = (
    <div className={classes.sort__dropdownItemIconUp}>
      <FontAwesomeIcon icon={faSortUp} />
    </div>
  );
  const descendIcon = (
    <div className={classes.sort__dropdownItemIconDown}>
      <FontAwesomeIcon icon={faSortDown} />
    </div>
  );

  const { sort__dropdownList, sort__dropdownItem, sort__dropdownItemTitle } =
    classes;

  return (
    <ul className={sort__dropdownList}>
      <li
        className={sort__dropdownItem}
        onClick={() => chooseSortingHandler(byTitle, ascendOrder)}
      >
        <div className={sort__dropdownItemTitle}>Title</div>
        {ascendIcon}
      </li>
      <li
        className={sort__dropdownItem}
        onClick={() => chooseSortingHandler(byTitle, descendOrder)}
      >
        <div className={sort__dropdownItemTitle}>Title</div>
        {descendIcon}
      </li>
      <li
        className={sort__dropdownItem}
        onClick={() => chooseSortingHandler(byPrice, ascendOrder)}
      >
        <div className={sort__dropdownItemTitle}>Price</div>
        {ascendIcon}
      </li>
      <li
        className={sort__dropdownItem}
        onClick={() => chooseSortingHandler(byPrice, descendOrder)}
      >
        <div className={sort__dropdownItemTitle}>Price</div>
        {descendIcon}
      </li>
      <li
        className={sort__dropdownItem}
        onClick={() => chooseSortingHandler(byRating, ascendOrder)}
      >
        <div className={sort__dropdownItemTitle}>Rating</div>
        {ascendIcon}
      </li>
      <li
        className={sort__dropdownItem}
        onClick={() => chooseSortingHandler(byRating, descendOrder)}
      >
        <div className={sort__dropdownItemTitle}>Rating</div>
        {descendIcon}
      </li>
      <li className={classes.sort__dropdownItem} onClick={resetHandler}>
        <div>Reset</div>
      </li>
    </ul>
  );
};

export default DropdownList;
