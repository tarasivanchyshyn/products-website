import { FC } from 'react';
import { Link } from 'react-router-dom';

import { homeURL, productsURL } from '@constants';
import classes from './BreadCrumbs.module.scss';

const BreadCrumbs: FC = () => {
  const { breadCrumbs, link } = classes;

  return (
    <div className={breadCrumbs}>
      <Link to={homeURL} className={link}>
        Homepage
      </Link>
      <span>/</span>
      <Link to={productsURL} className={link}>
        All products
      </Link>
    </div>
  );
};

export default BreadCrumbs;
