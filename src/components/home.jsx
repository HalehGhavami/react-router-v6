import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
  //to !redirect! after doing some action like click on page
  const navigate = useNavigate();
  return (
    <>
      <button
        onClick={() => {
          //navigate is a function
          navigate('/dashboard');
        }}
      >
        Login
      </button>
      <h1>Home Page</h1>
      <Link to={'/about'}>About</Link> | <Link to={'/courses'}>Courses</Link>
    </>
  );
};

export default Home;
