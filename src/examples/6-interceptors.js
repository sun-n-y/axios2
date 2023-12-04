import { useEffect } from 'react';
import authFetch from '../axios/interceptors';

const url = 'https://course-api.com/react-store-productss';

const Interceptors = () => {
  const fetchData = async () => {
    try {
      const response = await authFetch('/react-store-productss');
    } catch (error) {}
  };

  useEffect(() => {
    fetchData();
  }, []);

  return <h2 className="text-center">interceptors</h2>;
};
export default Interceptors;
