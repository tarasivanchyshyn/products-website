import { Link } from 'react-router-dom';

import { homeURL, productsURL } from '@constants';
import classes from './BreadCrumbs.module.scss';

const { breadCrumbs, link } = classes;

function BreadCrumbs() {
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
}

export default BreadCrumbs;
