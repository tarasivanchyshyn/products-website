import { FC } from 'react';
import { Link } from 'react-router-dom';

const NotFound: FC = () => {
  return (
    <h1>
      Page doesn't exist! Return to <Link to="/">Home</Link>
    </h1>
  );
};

export default NotFound;
