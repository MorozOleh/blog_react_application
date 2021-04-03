import { BASE_URL } from './getPosts';

import axios from "axios";

const request = async(id, newPost) => {
  return axios.put(`${BASE_URL}${id}`, { ...newPost });
};

export const putPost = (id, newPost) => request(id, newPost);
