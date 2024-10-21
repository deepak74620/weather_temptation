import axios from 'axios';
const apiUrl ='http:localhost:4000/api/v1'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
  });

export const loginUser = async (body) => {
  try {
    const response = await axiosInstance.post(`api/v1/login`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_xApiKey,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error; 
  }
};
