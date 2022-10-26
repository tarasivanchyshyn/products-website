import { FC } from 'react';
import { Link } from 'react-router-dom';

import classes from './Info.module.scss';

const Info: FC = () => {
  return (
    <div className={classes.info}>
      <div className={classes.info__left}>
        <Link to={'#'} className={classes.info__link}>
          Chat with us
        </Link>
        <a className={classes.info__info} href="tel:+420336775664">
          +420 336 775 664
        </a>
        <a className={classes.info__info} href="mailto:info@freshnesecom.com">
          info@freshnesecom.com
        </a>
      </div>
      <div className={classes.info__right}>
        <Link to={'#'} className={classes.info__link}>
          Blog
        </Link>
        <Link to={'#'} className={classes.info__link}>
          About Us
        </Link>
        <Link to={'#'} className={classes.info__link}>
          Careers
        </Link>
      </div>
    </div>
  );
};

export default Info;
