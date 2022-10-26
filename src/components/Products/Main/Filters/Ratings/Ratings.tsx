import { FC } from 'react';

import RatingItem from './RatingItem/RatingItem';
import { ratings } from '@constants';

import classes from './Ratings.module.scss';

const Ratings: FC = () => {
  return (
    <section className={classes.rating}>
      <h3 className={classes.rating__header}>Rating</h3>
      <ul className={classes.rating__list}>
        {ratings.map((rating) => (
          <RatingItem rating={rating} key={rating} />
        ))}
      </ul>
    </section>
  );
};

export default Ratings;
