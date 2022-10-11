import { FC } from 'react';

import arrowRight from '@assets/arrow-right.svg';
import heart from '@assets/heart.svg';
import { IProduct } from 'models/IProduct';
import starsConfigurer from 'helpers/starsConfigurer';

import classes from './Card.module.scss';

interface CardProps {
  product: IProduct;
}

const Card: FC<CardProps> = ({ product }) => {
  const {
    title,
    description,
    image,
    rating,
    freshness,
    farm,
    delivery,
    units,
    stock,
    price,
    priceBefore,
    freeShipping,
    deliveryTime
  } = product;

  const stars = starsConfigurer(rating);
  const deliveryT =
    deliveryTime > 1 ? ` ${deliveryTime} days` : ` ${deliveryTime} day`;

  return (
    <li className={classes.card}>
      <div className={classes.imgWrapper}>
        <img src={image} alt="product look" className={classes.card__image} />
      </div>
      <div className={classes.card__info}>
        <div className={classes.card__infoLeft}>
          <div className={classes.card__header}>
            <h3 className={classes.card__title}>{title}</h3>
            <p className={classes.card__description}>{description}</p>
          </div>
          <ul className={classes.card__rating}>{stars}</ul>
          <ul className={classes.card__details}>
            <li className={classes.card__detail}>
              <span className={classes.card__detailHeader}>Freshness</span>
              <span className={classes.card__detailValue}>{freshness}</span>
            </li>
            <li className={classes.card__detail}>
              <span className={classes.card__detailHeader}>Farm</span>
              <span className={classes.card__detailValue}>{farm}</span>
            </li>
            <li className={classes.card__detail}>
              <span className={classes.card__detailHeader}>Delivery</span>
              <span className={classes.card__detailValue}>{delivery}</span>
            </li>
            <li className={classes.card__detail}>
              <span className={classes.card__detailHeader}>Stock</span>
              <span className={classes.card__detailValue}>
                {stock} {units}
              </span>
            </li>
          </ul>
        </div>
        <div className={classes.card__infoRight}>
          <div className={classes.card__price}>
            <p className={classes.card__currentPrice}>{price}$</p>
            <p className={classes.card__oldPrice}>{priceBefore}$</p>
          </div>
          <div className={classes.card__delivery}>
            {freeShipping && (
              <p className={classes.card__deliveryFree}>Free Shipping</p>
            )}
            <p className={classes.card__deliveryTime}>Delivery in{deliveryT}</p>
          </div>
          <div className={classes.card__actions}>
            <button className={classes.card__btnDetail}>
              <span>Product Detail</span>
              <img src={arrowRight} alt="arrow" />
            </button>
            <button className={classes.card__btnAddToWish}>
              <img src={heart} alt="arrow" />
              <span>Add to wish list</span>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
