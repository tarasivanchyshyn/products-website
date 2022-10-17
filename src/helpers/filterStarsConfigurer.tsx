import { ReactComponent as StarGold } from '@assets/star-small-gold.svg';
import { ReactComponent as StarWhite } from '@assets/star-small-white.svg';

const filterStarsConfigurer = (rating: number) => {
  const stars = [];
  for (let i = 0; i < rating; i++) {
    stars.push(
      <li key={Math.random().toString()}>
        <StarGold />
      </li>
    );
  }
  const whiteStarsLength = 5 - stars.length;
  for (let i = 0; i < whiteStarsLength; i++) {
    stars.push(
      <li key={Math.random().toString()}>
        <StarWhite />
      </li>
    );
  }

  return stars;
};

export default filterStarsConfigurer;
