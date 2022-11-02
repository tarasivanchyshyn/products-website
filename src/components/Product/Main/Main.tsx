import GreenInfoOval from '@components/UI/GreenInfoOval/GreenInfoOval';
import Details from '../Details/Details';
import Actions from '../Actions/Actions';
import TabsSection from '../Tabs/TabsSection';
import starsConfigurer from 'helpers/starsConfigurer';
import { IProduct } from 'models/IProduct';

import classes from './Main.module.scss';

interface MainProps {
  product?: IProduct;
}

const Main = ({ product }: MainProps) => {
  if (!product) {
    return <div className={classes.error}>Error occured</div>;
  }

  const { discount, freeShipping, image, title, rating, description } = product;
  const { country, categories, stock, color, units, deliveryTime } = product;
  const { delivery, priceBefore, price, reviews, size, questions, cooking } =
    product;

  const detailsCompData = {
    country,
    categories,
    stock,
    color,
    units,
    deliveryTime,
    delivery,
    size
  };
  const actionsCompData = { price, priceBefore, units, stock };
  const tabsData = { description, cooking, reviews, questions };

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
          <div className={classes.ilustrations__imagesSecondary}>
            <img src={image} alt={title} />
          </div>
          <div className={classes.ilustrations__imagesSecondary}>
            <img src={image} alt={title} />
          </div>
        </div>
      </div>
      <div className={classes.info}>
        <div className={classes.info__main}>
          <div className={classes.info__header}>
            <h1 className={classes.info__title}>{title}</h1>
            <div className={classes.info__rating}>
              <ul>{stars}</ul>
              <span>
                ({reviewsCount} {reviewsCustomers})
              </span>
            </div>
          </div>
          <p className={classes.info__description}>{description}</p>
          <Details data={detailsCompData} />
          <Actions data={actionsCompData} />
        </div>
        <div className={classes.info__additional}>
          <TabsSection data={tabsData} />
        </div>
      </div>
    </div>
  );
};

export default Main;
