import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import classes from './Dropdown.module.scss';

interface StockProps {
  data: {
    unit: string;
    amount: number;
    setUnit: (unit: string) => void;
    setAmount: (amount: number) => void;
    units: string[];
    stock: number;
  };
}

const Dropdown = (props: StockProps) => {
  const [open, setOpen] = useState(false);
  const { unit, amount, setUnit, setAmount, units, stock } = props.data;

  let maxOrderCount: number = stock;
  switch (unit) {
    case 'pounds':
      maxOrderCount = stock * 2.205;
      break;
  }

  const inputLength = amount.toString().length;
  let inputWidth;
  switch (inputLength) {
    case 1:
      inputWidth = '25px';
      break;
    case 2:
      inputWidth = '32px';
      break;
    case 3:
      inputWidth = '40px';
      break;
  }

  const toggleWindowHandler = () => setOpen(!open);
  const openWindow = () => setOpen(true);
  const closeWindow = () => setOpen(false);

  const chooseSortingHandler = (unit: string) => {
    toggleWindowHandler();
    setUnit(unit);
    setAmount(1);
  };

  const amountChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value));
  };

  const icon = open ? faChevronUp : faChevronDown;

  return (
    <div className={classes.info__mainActionsDropdown}>
      <div className={classes.wrapper}>
        <div
          className={classes.dropdownHoverArea}
          onMouseEnter={openWindow}
          onMouseLeave={closeWindow}
        ></div>
        <div className={classes.left}>
          <input
            className={classes.count}
            style={{ width: `${inputWidth}` }}
            type="number"
            min={1}
            max={maxOrderCount}
            step={1}
            value={amount}
            onChange={amountChangeHandler}
            onKeyDown={(e) => e.preventDefault()}
          />
          <div className={classes.divider}></div>
        </div>
        <div className={classes.right}>
          <div className={classes.select}>
            <span className={classes.selectTitle}>{unit}</span>
            <FontAwesomeIcon icon={icon} className={classes.selectIcon} />
          </div>
          {open && (
            <ul onMouseEnter={openWindow} onMouseLeave={closeWindow}>
              {units.map((unit) => (
                <li key={unit} onClick={() => chooseSortingHandler(unit)}>
                  {unit}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
};

export default Dropdown;
