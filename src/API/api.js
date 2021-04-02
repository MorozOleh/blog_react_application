import axios from "axios";

const BASE_URL = 'https://bloggy-api.herokuapp.com';

const response = async(endPoint) => {
  const response = await axios.get(
    `${BASE_URL}/${endPoint}`
  );

  const { data } = response;
  return data;
}

export const fetchPost = url => response(url);

