import { ReactComponent as StarGoldSmallSvg } from '@assets/star-small-gold.svg';
import { ReactComponent as StarWhiteSmallSvg } from '@assets/star-small-white.svg';

const filterStarsConfigurer = (rating: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <li key={Math.random().toString()}>
        <StarGoldSmallSvg />
      </li>
    );
  }
  const whiteStarsLength = 5 - stars.length;
  for (let i = 0; i < whiteStarsLength; i++) {
    stars.push(
      <li key={Math.random().toString()}>
        <StarWhiteSmallSvg />
      </li>
    );
  }

  return stars;
};

export default filterStarsConfigurer;
