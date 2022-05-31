import { Link } from 'react-router-dom';

const About = () => {
  return (
    <>
      <h1>About Page</h1>
      <Link to={'/home'}>Home</Link>
    </>
  );
};

export default About;
