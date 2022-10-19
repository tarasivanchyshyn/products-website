import { FC } from 'react';

import filterStarsConfigurer from 'helpers/filterStarsConfigurer';
import { useAppDispatch, useAppSelector } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';

import classes from './RatingItem.module.scss';

interface RatingItemProps {
  rating: number;
}

const RatingItem: FC<RatingItemProps> = ({ rating }) => {
  const dispatch = useAppDispatch();
  const choosedRatings = useAppSelector(
    (state) => state.productsReducer.choosedRatings
  );

  const stars = filterStarsConfigurer(rating);

  const chooseRatingHandler = (rating: number) => {
    dispatch(productsActions.chooseRatings(rating));
  };
  const checked = choosedRatings.includes(rating);

  return (
    <li className={classes.rating__item}>
      <input
        type="checkbox"
        className={classes.rating__itemCheckbox}
        checked={checked}
        onChange={() => chooseRatingHandler(rating)}
      />
      <ul className={classes.rating__itemStars}>{stars}</ul>
    </li>
  );
};

export default RatingItem;
