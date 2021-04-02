import { BASE_URL } from './getPosts';

import axios from "axios";

const request = async(newPost) => {
  return axios.post(BASE_URL, { ...newPost });
}

export const createPost = (newPost) => request(newPost);
