import axios from 'axios';
import Cookies from 'js-cookie';
const apiUrl ='http:localhost:4000/api/v1'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
  });

export const getUser = async () => {
    const token = Cookies.get('accessToken')
  try {
    const response = await axiosInstance.get(`api/v1/me`, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_xApiKey,
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error; 
  }
};
