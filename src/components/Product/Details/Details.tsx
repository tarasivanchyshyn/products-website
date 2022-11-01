import classes from './Details.module.scss';

interface DetailsProps {
  data: {
    country: string;
    categories: string[];
    stock: number;
    color: string;
    units: string[];
    deliveryTime: number;
    delivery: string;
    size: string;
  };
}

const Details = (props: DetailsProps) => {
  const { country, categories, stock, color } = props.data;
  const { units, deliveryTime, delivery, size } = props.data;

  return (
    <div className={classes.info__details}>
      <ul>
        <li className={classes.info__detailsItem}>
          <span>Country:</span>
          <span>{country}</span>
        </li>
        <li className={classes.info__detailsItem}>
          <span>Category:</span>
          <span>{categories}</span>
        </li>
        <li className={classes.info__detailsItem}>
          <span>Stock:</span>
          {stock ? <span>In stock</span> : <span>Not in stock</span>}
        </li>
        <li className={classes.info__detailsItem}>
          <span>Color:</span>
          <span>{color}</span>
        </li>
      </ul>
      <ul>
        <li className={classes.info__detailsItem}>
          <span>Size:</span>
          <span>{size}</span>
        </li>
        <li className={classes.info__detailsItem}>
          <span>Buy by:</span>
          <span>{units.join(', ')}</span>
        </li>
        <li className={classes.info__detailsItem}>
          <span>Delivery:</span>
          <span>
            {deliveryTime} {deliveryTime === 1 ? 'day' : 'days'}
          </span>
        </li>
        <li className={classes.info__detailsItem}>
          <span>Delivery area:</span>
          <span>{delivery}</span>
        </li>
      </ul>
    </div>
  );
};

export default Details;
