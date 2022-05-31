import { NavLink } from 'react-router-dom';
//for nesting Route
import { Outlet } from 'react-router-dom';
const Courses = () => {
  return (
    <>
      <h1>Courses Page</h1>
      {/* distructe isActive item of object (that is the only item of this object) */}
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'black' };
        }}
        to={'/courses/course1'}
      >
        Course1
      </NavLink>
      |
      <NavLink
        style={({ isActive }) => {
          return { color: isActive ? 'red' : 'black' };
        }}
        to={'/courses/course2'}
      >
        Course2
      </NavLink>
      <Outlet />
    </>
  );
};

export default Courses;
