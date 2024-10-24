import axios from "axios";
import Cookies from "js-cookie";

const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

// Fetch all food items
export const getAllFoods = async () => {
  const token = Cookies.get("accessToken");
  try {
    
    
    const response = await axiosInstance.get(`/api/v1/foods`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_xApiKey,
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("In getAllFoods");
    console.log(response);
    
    return response.data;
  } catch (error) {
    console.error("Error fetching foods:", error);
    throw error;
  }
};

// Fetch all destinations
export const getAllDestinations = async () => {
  const token = Cookies.get("accessToken");
  try {
    
    
    const response = await axiosInstance.get(`/api/v1/destinations`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_xApiKey,
        Authorization: `Bearer ${token}`,
      },
    });
    console.log("In getAllDestinations");
    
    return response.data;
  } catch (error) {
    console.error("Error fetching destinations:", error);
    throw error;
  }
};

// Fetch all trips
export const getAllTrips = async () => {
  const token = Cookies.get("accessToken");
  try {
    const response = await axiosInstance.get(`/api/v1/trips`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_xApiKey,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching trips:", error);
    throw error;
  }
};

export const toggleFav = async (body) => {
  const token = Cookies.get("accessToken");
  try {
    const response = await axiosInstance.post(
      `api/v1/toggleFav`,
      {
        body: body,
      },
      {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": process.env.NEXT_PUBLIC_xApiKey,
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};