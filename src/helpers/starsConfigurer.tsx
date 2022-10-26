import { ReactComponent as StarGoldSvg } from '@assets/star-gold.svg';
import { ReactComponent as StarWhiteSvg } from '@assets/star-white.svg';

const starsConfigurer = (rating: number) => {
  const stars = [];
  for (let i = 0; i < Math.round(rating); i++) {
    stars.push(
      <li key={Math.random().toString()}>
        <StarGoldSvg />
      </li>
    );
  }
  const whiteStarsLength = 5 - stars.length;
  for (let i = 0; i < whiteStarsLength; i++) {
    stars.push(
      <li key={Math.random().toString()}>
        <StarWhiteSvg />
      </li>
    );
  }

  return stars;
};

export default starsConfigurer;
