import React from 'react';
import ReactDOM from 'react-dom';
import About from './components/about';
import Home from './components/home';
import Courses from './components/courses';
import Course1 from './components/course1';
import Course2 from './components/course2';

//using "as " for naming shorter
import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
} from 'react-router-dom';
//BrowerRouter(Router) have to wrapp all of our app
//at v6 all Route have to be in Routes component
//Add Route as single at 3rd level
ReactDOM.render(
  <Router>
    <Routes>
      {/* element attribute instaed of component attribute in last version */}
      {/* Navigate to redirect one url to another url  */}
      <Route path="/home" element={<Navigate replace to="/" />} />
      <Route path="/about" element={<About />} />
      {/* used pair Route for nesting more routes inside of it */}
      <Route path="/courses" element={<Courses />}>
        {/* nested route path don't have "/"  */}
        <Route path="course1" element={<Course1 />} />
        <Route path="course2" element={<Course2 />} />
      </Route>

      {/* rendering Home with both excat / and /home in path  without need to use "excat" or Switch*/}
      <Route path="/" element={<Home />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
