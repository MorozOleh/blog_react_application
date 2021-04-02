import { BASE_URL } from './getPosts'
import axios from 'axios';

const deleteRequest = async (id) => {
  const response = await axios.delete(`${BASE_URL}/${id}`);

  const { data } = response;

  return data;
}

export const deletePost = id => deleteRequest(id);