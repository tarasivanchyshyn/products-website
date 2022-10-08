import star from '@assets/star.svg';
import starWhite from '@assets/star-white.svg';
import arrowRight from '@assets/arrow-right.svg';
import heart from '@assets/heart.svg';

import classes from './Card.module.scss';

function Card() {
  return (
    <li className={classes.card}>
      <img src="#" alt="product look" className={classes.card__image} />
      <div className={classes.card__info}>
        <div className={classes.card__infoLeft}>
          <div className={classes.card__header}>
            <h3 className={classes.card__title}>Product title</h3>
            <p className={classes.card__description}>
              Space for a small product description
            </p>
          </div>
          <div className={classes.card__rating}>
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={star} alt="rating star" />
            <img src={starWhite} alt="rating star" />
          </div>
          <ul className={classes.card__details}>
            <li className={classes.card__detail}>
              <span className={classes.card__detailHeader}>Freshness</span>
              <span className={classes.card__detailValue}>
                New (Extra fresh)
              </span>
            </li>
            <li className={classes.card__detail}>
              <span className={classes.card__detailHeader}>Farm</span>
              <span className={classes.card__detailValue}>
                Grocery Tarm Fields
              </span>
            </li>
            <li className={classes.card__detail}>
              <span className={classes.card__detailHeader}>Delivery</span>
              <span className={classes.card__detailValue}>Europe</span>
            </li>
            <li className={classes.card__detail}>
              <span className={classes.card__detailHeader}>Stock</span>
              <span className={classes.card__detailValue}>320 pcs</span>
            </li>
          </ul>
        </div>
        <div className={classes.card__infoRight}>
          <div className={classes.card__price}>
            <p className={classes.card__currentPrice}>36.99 USD</p>
            <p className={classes.card__oldPrice}>48.56</p>
          </div>
          <div className={classes.card__delivery}>
            <p className={classes.card__deliveryFree}>Free Shipping</p>
            <p className={classes.card__deliveryTime}>Delivery in 1 day</p>
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
}

export default Card;
