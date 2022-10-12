import { ReactComponent as Star } from '@assets/star.svg';
import { ReactComponent as WhiteStar } from '@assets/star-white.svg';

const starsConfigurer = (rating: number) => {
  const stars = [];
  for (let i = 0; i < Math.round(rating); i++) {
    stars.push(
      <li key={Math.random().toString()}>
        <Star />
      </li>
    );
  }
  const whiteStarsLength = 5 - stars.length;
  for (let i = 0; i < whiteStarsLength; i++) {
    stars.push(
      <li key={Math.random().toString()}>
        <WhiteStar />
      </li>
    );
  }

  return stars;
};

export default starsConfigurer;
