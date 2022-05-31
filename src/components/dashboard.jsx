import { useLocation } from 'react-router-dom';
const Dashboard = () => {
  const location = useLocation();
  return (
    <>
      <h1>Dashboard Page / Hi {location.state}</h1>
    </>
  );
};

export default Dashboard;
