import axios from "axios";

// const TOKEN = JSON.parse(JSON.parse(localStorage.getItem("persist:root")).user)
//   .currentUser.accessToken;

export const publicRequest = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

// export const userRequest = axios.create({
//   baseURL: process.env.REACT_APP_API_URL,
//   headers: { token: `Bearer ${TOKEN}` },
// });
