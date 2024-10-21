import axios from "axios";
import Cookies from "js-cookie";
const apiUrl = "http:localhost:4000/api/v1";
const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
});

export const getAllMyTrips = async (pageNumber,pageSize) => {
  const token = Cookies.get("accessToken");
  try {
    const headers = {
      "Content-Type": "application/json",
      "x-api-key": process.env.NEXT_PUBLIC_xApiKey,
      Authorization: `Bearer ${token}`,
    };
    const url = `api/v1/trips/myTrips`;
    const params = new URLSearchParams();

    params.append("pageNumber", pageNumber);
    params.append("pageSize", pageSize);

    const urlWithParams = `${url}?${params.toString()}`;
    const response = await axiosInstance.get(urlWithParams, {
      headers,
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};
export const getAllMyFavTrips = async () => {
  const token = Cookies.get("accessToken");
  try {
    const response = await axiosInstance.get(`api/v1/trips/myFavTrips`, {
      headers: {
        "Content-Type": "application/json",
        "x-api-key": process.env.NEXT_PUBLIC_xApiKey,
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export const createTrip = async (body) => {
  const token = Cookies.get("accessToken");
  try {
    const response = await axiosInstance.post(
      `api/v1/trips/create`,
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
export const addMembers = async (body) => {
  const token = Cookies.get("accessToken");
  try {
    const response = await axiosInstance.post(
      `api/v1/trips/addMembersToTrip`,
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
export const addToFav = async (body) => {
  const token = Cookies.get("accessToken");
  try {
    const response = await axiosInstance.post(
      `api/v1/trips/addToFav`,
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
