import axios from "axios";

export const BASE_URL = 'https://bloggy-api.herokuapp.com/posts/';

const request = async() => {
  const response = await axios.get(BASE_URL);
  const { data } = response;

  return data;
}

export const getPosts = () => request();
