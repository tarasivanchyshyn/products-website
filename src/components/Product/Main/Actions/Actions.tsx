import { useState } from 'react';

import { ReactComponent as PlusSvg } from '@assets/plus.svg';
import { ReactComponent as HeartSvg } from '@assets/heart.svg';
import Button from '@components/UI/Button/Button';
import Dropdown from './Dropdown/Dropdown';

import classes from './Actions.module.scss';

interface ActionsProps {
  data: {
    price: number;
    priceBefore: number;
    units: string[];
    stock: number;
  };
}

const Actions = (props: ActionsProps) => {
  const { units, stock } = props.data;
  let { price, priceBefore } = props.data;
  const [amount, setAmount] = useState(1);
  const [unit, setUnit] = useState('kg');

  const dropdownData = { unit, amount, setUnit, setAmount, units, stock };

  price = unit === 'kg' ? price : Number((price / 2.205).toFixed(2));
  priceBefore =
    unit === 'kg' ? priceBefore : Number((priceBefore / 2.205).toFixed(2));

  return (
    <div className={classes.info__actions}>
      <div className={classes.info__actionsMain}>
        <div className={classes.info__price}>
          <div className={classes.info__priceCurrent}>{price} USD</div>
          <div className={classes.info__priceBefore}>{priceBefore} USD</div>
        </div>
        <div className={classes.info__buttons}>
          <Dropdown data={dropdownData} />
          <Button icon={<PlusSvg />} className={classes.info__addToCart}>
            Add to cart
          </Button>
        </div>
      </div>
      <button className={classes.info__addToWish}>
        <HeartSvg />
        <span>Add to wish list</span>
      </button>
    </div>
  );
};

export default Actions;
