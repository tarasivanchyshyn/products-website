import { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as ArrowRightSvg } from '@assets/arrow-right.svg';
import { productsURL } from '@constants';

import classes from './Home.module.scss';

const Home: FC = () => {
  return (
    <div className={classes.container}>
      <h1>Welcome to Freshnesecom!</h1>
      <div className={classes.wrapper}>
        <Link to={productsURL}>
          <button className={classes.button}>
            <span>Go to products</span>
            <ArrowRightSvg />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
