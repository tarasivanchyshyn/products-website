import { useEffect, useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';

import classes from './Dropdown.module.scss';

type Dropdownprops = {
  header: string;
  options?: string[];
};

function Dropdown({ header, options }: Dropdownprops) {
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
      <button onClick={toggleWindow} className={button}>
        <span className={button__header}>{header}</span>
        <FontAwesomeIcon icon={faChevronDown} className={button__icon} />
      </button>
      {open && (
        <div className={dropdown}>
          <span className={dropdown__item} onClick={selectItem}>
            Option1
          </span>
          <span className={dropdown__item} onClick={selectItem}>
            Option2
          </span>
          <span className={dropdown__item} onClick={selectItem}>
            Option3
          </span>
        </div>
      )}
    </div>
  );
}

export default Dropdown;
