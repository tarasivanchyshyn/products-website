import { Link } from 'react-router-dom';

import Button from '@components/UI/Button/Button';
import GreenInfoOval from '@components/UI/GreenInfoOval/GreenInfoOval';

import classes from './Card.module.scss';

interface CardProps {
  discount: number;
  title: string;
  image: string;
  description: string;
  price: number;
}

const Card = (props: CardProps) => {
  const { discount, title, image, description, price } = props;

  const scrollTop = () => {
    window.scrollTo({
      top: 100,
      left: 100,
      behavior: 'smooth'
    });
  };

  return (
    <div className={classes.card}>
      {discount > 0 && (
        <GreenInfoOval className={classes.card__discount}>
          -{discount}%
        </GreenInfoOval>
      )}
      <Link to={`/products/${title.toLowerCase()}`}>
        <img src={image} alt="product look" onClick={scrollTop} />
      </Link>
      <div className={classes.card__info}>
        <div className={classes.card__header}>
          <h4>{title}</h4>
          <p>{description}</p>
        </div>
        <div className={classes.card__actions}>
          <span>{price} USD</span>
          <Button>Buy now</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
