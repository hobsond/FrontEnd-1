import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");
  console.log('making token')
  return axios.create({
    headers: { authorization: token },
    baseURL: "https://spotify-api-prod.herokuapp.com/",
  });
};
