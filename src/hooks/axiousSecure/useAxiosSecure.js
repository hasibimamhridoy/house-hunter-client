import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from '../useAuth';


const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`, 
});

const useAxiosSecure = () => {
  const { handleManualLogout } = useAuth(); 
  const navigate = useNavigate(); 

  useEffect(() => {
    axiosSecure.interceptors.request.use((config) => {
      const token = localStorage.getItem('token');
      if (token) {
        config.headers.Authorization = `bearer ${token}`;
      }
      return config;
    });

    axiosSecure.interceptors.response.use(
      (response) => response,
      async (error) => {
        if (error.response && (error.response.status === 401 || error.response.status === 403)) {
          // await handleManualLogout();
          // navigate('/login');
        }
        return Promise.reject(error);
      }
    );
  }, [handleManualLogout, navigate, axiosSecure]);

  return [axiosSecure];
};

export default useAxiosSecure;