import GreenInfoOval from '@components/UI/GreenInfoOval/GreenInfoOval';
import starsConfigurer from 'helpers/starsConfigurer';
import { IProduct } from 'models/IProduct';
import classes from './Main.module.scss';
import Dropdown from '../Dropdown/Dropdown';
import Button from '@components/UI/Button/Button';
import { ReactComponent as PlusSvg } from '@assets/plus.svg';
import { ReactComponent as HeartSvg } from '@assets/heart.svg';

interface MainProps {
  product?: IProduct;
}

const Main = ({ product }: MainProps) => {
  if (!product) {
    return <div>Error occured</div>;
  }

  const {
    discount,
    freeShipping,
    image,
    title,
    rating,
    description,
    country,
    categories,
    stock,
    color,
    units,
    deliveryTime,
    delivery,
    priceBefore,
    price,
    reviews
  } = product;

  const stars = starsConfigurer(rating);
  const reviewsCount = reviews.length;
  const reviewsCustomers =
    reviewsCount === 1 ? 'customer review' : 'customers reviews';

  return (
    <div className={classes.main}>
      <div className={classes.ilustrations}>
        <div className={classes.ilustrations__benefits}>
          {discount && <GreenInfoOval>-{discount}%</GreenInfoOval>}
          {freeShipping && <GreenInfoOval>Free shipping</GreenInfoOval>}
        </div>
        <div className={classes.ilustrations__images}>
          <div className={classes.ilustrations__imagesMain}>
            <img src={image} alt={title} />
          </div>
          <span className={classes.ilustrations__imagesSecondary}>
            <img src={image} alt={title} />
          </span>
          <span className={classes.ilustrations__imagesSecondary}>
            <img src={image} alt={title} />
          </span>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__main}>
          <div className={classes.info__mainHeader}>
            <h1 className={classes.info__mainHeaderTitle}>{title}</h1>
            <div className={classes.info__mainHeaderRating}>
              <ul>{stars}</ul>
              <span>
                ({reviewsCount} {reviewsCustomers})
              </span>
            </div>
          </div>
          <p className={classes.info__mainDescription}>{description}</p>
          <div className={classes.info__mainDetails}>
            <ul>
              <li className={classes.info__mainDetailsItem}>
                <span>Country:</span>
                <span>{country}</span>
              </li>
              <li className={classes.info__mainDetailsItem}>
                <span>Category:</span>
                <span>{categories}</span>
              </li>
              <li className={classes.info__mainDetailsItem}>
                <span>Stock:</span>
                {stock && <span>In stock</span>}
              </li>
              <li className={classes.info__mainDetailsItem}>
                <span>Color:</span>
                <span>{color}</span>
              </li>
            </ul>
            <ul>
              <li className={classes.info__mainDetailsItem}>
                <span>Size:</span>
                <span>All sizes</span>
              </li>
              <li className={classes.info__mainDetailsItem}>
                <span>Buy by:</span>
                <span>{units.join(', ')}</span>
              </li>
              <li className={classes.info__mainDetailsItem}>
                <span>Delivery:</span>
                <span>
                  {deliveryTime} {deliveryTime === 1 ? 'day' : 'days'}
                </span>
              </li>
              <li className={classes.info__mainDetailsItem}>
                <span>Delivery area:</span>
                <span>{delivery}</span>
              </li>
            </ul>
          </div>
          <div className={classes.info__mainActions}>
            <div className={classes.info__mainActionsMain}>
              <div className={classes.info__mainActionsPrice}>
                <div className={classes.info__mainActionsPriceCurrent}>
                  {price} USD
                </div>
                <div className={classes.info__mainActionsPriceBefore}>
                  {priceBefore} USD
                </div>
              </div>
              <div className={classes.info__mainActionsActions}>
                <Dropdown units={units} />
                <Button
                  icon={<PlusSvg />}
                  className={classes.info__mainActionsToCart}
                >
                  Add to cart
                </Button>
              </div>
            </div>
            <button className={classes.info__mainActionsWish}>
              <HeartSvg />
              <span>Add to wish list</span>
            </button>
          </div>
        </div>
        <div className={classes.info__additional}></div>
      </div>
    </div>
  );
};

export default Main;
