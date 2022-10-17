import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '@assets/arrow-right.svg';
import { productsURL } from '@constants';

import classes from './Home.module.scss';

function Home() {
  return (
    <div className={classes.container}>
      <h1>Welcome to Freshnesecom!</h1>
      <div className={classes.wrapper}>
        <Link to={productsURL}>
          <button className={classes.button}>
            <span>Go to products</span>
            <Arrow />
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
