import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

import classes from './Dropdown.module.scss';

type Dropdownprops = {
  header: string;
  options?: string[];
};

function Dropdown({ header }: Dropdownprops) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const toggleWindow = () => setOpen(!open);
  const selectItem = () => setOpen(false);

  useEffect(() => {
    let handler = (e: any) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => {
      document.removeEventListener('mousedown', handler);
    };
  });

  const { dropdown, button, button__header, button__icon, dropdown__item } =
    classes;

  return (
    <div ref={ref}>
      <button className={button} onClick={toggleWindow}>
        <span className={button__header}>{header}</span>
        <FontAwesomeIcon
          icon={open ? faChevronUp : faChevronDown}
          className={button__icon}
        />
      </button>
      {open && (
        <div className={dropdown}>
          <div className={dropdown__item} onClick={selectItem}>
            Option1
          </div>
          <div className={dropdown__item} onClick={selectItem}>
            Option2
          </div>
          <div className={dropdown__item} onClick={selectItem}>
            Option3
          </div>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
