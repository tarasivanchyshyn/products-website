import { FormEvent, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';

import classes from './Dropdown.module.scss';

const Dropdown = ({ units }: { units: string[] }) => {
  const [open, setOpen] = useState(false);
  const [unit, setUnit] = useState('kg');
  const [amount, setAmount] = useState(1);

  const toggleWindowHandler = () => setOpen(!open);

  const chooseSortingHandler = (unit: string) => {
    toggleWindowHandler();
    setUnit(unit);
  };

  const amountChangeHandler = (e: FormEvent<HTMLInputElement>) => {
    setAmount(Number(e.currentTarget.value));
  };
  const cancelKeyboard = (e: FormEvent<HTMLInputElement>) => e.preventDefault();

  const icon = open ? faChevronUp : faChevronDown;

  return (
    <div className={classes.info__mainActionsDropdown}>
      <div
        className={classes.wrapper}
        onMouseEnter={toggleWindowHandler}
        onMouseLeave={toggleWindowHandler}
      >
        <div className={classes.left}>
          <input
            className={classes.count}
            type="number"
            min={1}
            max={99}
            step={1}
            value={amount}
            onChange={amountChangeHandler}
            onKeyDown={cancelKeyboard}
          ></input>
          <div className={classes.divider}></div>
        </div>
        <div className={classes.right}>
          <div className={classes.select}>
            <span className={classes.selectTitle}>{unit}</span>
            <FontAwesomeIcon icon={icon} className={classes.selectIcon} />
          </div>
          {open && (
            <ul>
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
