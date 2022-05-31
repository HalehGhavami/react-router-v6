//for receiving parameter from url
import { useParams } from 'react-router-dom';

const Content = () => {
  //object destructuring
  const { id } = useParams();
  return (
    <>
      <h1>URL params is {id}</h1>
    </>
  );
};

export default Content;
