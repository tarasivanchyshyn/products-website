import { Slider } from 'antd';

import { useAppDispatch } from 'hooks/redux';
import { productsActions } from 'store/reducers/ProductsSlice';

import classes from './Price.module.scss';

interface PriceProps {
  data: {
    minPrice: number;
    maxPrice: number;
    min: number;
    max: number;
    onChange: (value: number[]) => void;
  };
  setDefaultValues: () => void;
}

const Price = (props: PriceProps) => {
  const dispatch = useAppDispatch();
  const { data, setDefaultValues } = props;
  const { minPrice, maxPrice, min, max, onChange } = data;

  const choosePriceHandler = (value: number[]) => {
    dispatch(productsActions.choosePrice(value));
    setDefaultValues();
  };

  return (
    <section className={classes.price}>
      <h3 className={classes.price__header}>Price</h3>
      <Slider
        range
        min={minPrice}
        max={maxPrice}
        step={0.01}
        value={[min, max]}
        onChange={onChange}
        onAfterChange={choosePriceHandler}
        className={classes.slider}
      />
      <div className={classes.price__inputs}>
        <div className={classes.price__input}>
          <label htmlFor="min">Min</label>
          <input type="text" id="min" value={min} readOnly />
        </div>
        <div className={classes.price__dash}>-</div>
        <div className={classes.price__input}>
          <label htmlFor="max">Max</label>
          <input type="text" id="max" value={max} readOnly />
        </div>
      </div>
    </section>
  );
};

export default Price;
