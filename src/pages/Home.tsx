import { Link } from 'react-router-dom';

import { ReactComponent as Arrow } from '@assets/arrow-right.svg';
import { productsURL } from '@constants';

import classes from './Home.module.scss';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to Freshnesecom!</h1>
      <Link to={productsURL}>
        <div className={classes.wrapper}>
          <button className={classes.button}>
            <span>Go to products</span>
            <Arrow />
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
