import { BASE_URL } from './getPosts'
import axios from 'axios';

const deleteRequest = async (id) => {
  return axios.delete(`${BASE_URL}${id}`);
}

export const deletePost = id => deleteRequest(id);
