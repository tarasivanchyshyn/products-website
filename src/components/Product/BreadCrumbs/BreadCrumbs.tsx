import { Link } from 'react-router-dom';

import { homeURL, productsURL } from '@constants';
import classes from './BreadCrumbs.module.scss';

interface BreadCrumbsProps {
  productTitle?: string;
}

const BreadCrumbs = ({ productTitle }: BreadCrumbsProps) => {
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
      <span>/</span>
      <Link to={'#'} className={link}>
        {productTitle}
      </Link>
    </div>
  );
};

export default BreadCrumbs;
