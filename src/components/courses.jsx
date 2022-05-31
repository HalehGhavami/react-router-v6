import { Link } from 'react-router-dom';
//for nesting Route
import { Outlet } from 'react-router-dom';
const Courses = () => {
  return (
    <>
      <h1>Courses Page</h1>
      <Link to={'/courses/course1'}>Course1</Link> |
      <Link to={'/courses/course2'}>Course2</Link>
      <Outlet />
    </>
  );
};

export default Courses;
