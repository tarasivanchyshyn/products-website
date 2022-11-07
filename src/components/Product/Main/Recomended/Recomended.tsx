import { useEffect, useState } from 'react';

import Button from '@components/UI/Button/Button';
import Card from './Card/Card';
import { ReactComponent as ArrowRight } from '@assets/arrow-right-green.svg';
import { IProduct } from 'models/IProduct';

import classes from './Recomended.module.scss';

interface RecomendedProps {
  products: IProduct[];
}

const Recomended = ({ products }: RecomendedProps) => {
  const [maxCards, setMaxCards] = useState(0);

  useEffect(() => {
    setMaxCards(4);
  }, []);

  const isDisabled = maxCards >= products.length;

  const showMore = () => {
    setMaxCards((prevValue) => prevValue + 4);
  };

  return (
    <div className={classes.recomended}>
      <div className={classes.header}>
        <h3>You will maybe love</h3>
        <Button
          className={classes.header__button}
          icon={<ArrowRight />}
          onClick={showMore}
          disabled={isDisabled}
        >
          More products
        </Button>
      </div>
      <div className={classes.cards}>
        {products
          .map(({ id, image, discount, title, description, price }) => (
            <Card
              key={id}
              image={image}
              discount={discount}
              title={title}
              description={description}
              price={price}
            />
          ))
          .slice(0, maxCards)}
      </div>
    </div>
  );
};

export default Recomended;
