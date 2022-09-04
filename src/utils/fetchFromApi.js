import axios from "axios";

const BASEURL = "https://youtube-v31.p.rapidapi.com";

const API_KEY = import.meta.env.VITE_REACT_APP_RAPID_API_KEY;
export const options = {
  url: BASEURL,
  params: {
    maxResults: "50",
  },
  headers: {
    "X-RapidAPI-Key": API_KEY,
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromApi = async (url) => {
  const response = await axios.get(`${BASEURL}/${url}`, options);
  return response.data;
};
