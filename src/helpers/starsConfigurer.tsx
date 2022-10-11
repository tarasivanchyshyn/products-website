import star from '@assets/star.svg';
import starWhite from '@assets/star-white.svg';

const starsConfigurer = (rating: number) => {
  const stars = [];
  for (let i = 0; i < Math.round(rating); i++) {
    stars.push(
      <img src={star} alt="rating star" key={Math.random().toString()} />
    );
  }
  const whiteStarsLength = 5 - stars.length;
  for (let i = 0; i < whiteStarsLength; i++) {
    stars.push(
      <img src={starWhite} alt="rating star" key={Math.random().toString()} />
    );
  }

  return stars;
};

export default starsConfigurer;
