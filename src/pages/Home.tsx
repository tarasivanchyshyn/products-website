import { Link } from 'react-router-dom';
import { productsURL } from '@constants';

function Home() {
  return (
    <div style={{ textAlign: 'center', marginTop: '2rem' }}>
      <h1>Welcome to Freshnesecom!</h1>
      <Link to={productsURL}>
        <button>Go to products</button>
      </Link>
    </div>
  );
}

export default Home;
