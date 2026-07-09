import axios from "axios";

const API = axios.create({
  baseURL: "https://job-board-ztsy.onrender.com/api",
});

export const googleLogin = async (token) => {
  const response = await API.post("/auth/google", {
    token,
  });

  return response.data;
};