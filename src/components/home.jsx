import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>Home Page</h1>
      <Link to={'/about'}>About</Link> |<Link to={'/courses'}>Courses</Link>
    </>
  );
};

export default Home;
