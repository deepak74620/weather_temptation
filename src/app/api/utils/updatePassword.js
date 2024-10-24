import axios from 'axios';
const apiUrl ='http:localhost:4000/api/v1'
const axiosInstance = axios.create({
    baseURL: 'http://localhost:4000',
  });

export const updateUserPassword = async (body) => {
  try {
    console.log("hiiiiiiiiii");
    
    const response = await axiosInstance.post(`api/v1/updatePassword`, body, {
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.NEXT_PUBLIC_xApiKey,
      },
    });
    // console.error('No Error during update:', error);
    return response;
  } catch (error) {
    console.error('Error during update:', error);
    throw error; 
  }
};
