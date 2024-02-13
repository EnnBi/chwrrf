import axios from "axios";

// const baseURL = "http://13.40.5.17:8080/api/";
const baseURL = "https://admin.chwrrf.org/api/";

const instance = axios.create({
  baseURL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
    Accept: "*/*",
  },
});

export const getAllNotifications = async () => {
  try {
    const response = await instance.get("getAllNotify");
    return response.data;
  } catch (error) {
    console.error("Error fetching notification:", error);
    throw error;
  }
};
