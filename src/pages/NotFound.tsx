import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <h1>
      Page doesn't exist! Return to <Link to="/">Home</Link>
    </h1>
  );
}

export default NotFound;
