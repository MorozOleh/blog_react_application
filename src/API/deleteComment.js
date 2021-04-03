import axios from 'axios';
const BASE_URL = 'https://bloggy-api.herokuapp.com/comments';

const deleteRequest = async (id) => {
  return axios.delete(`${BASE_URL}/${id}`);
}

export const deleteComment = id => deleteRequest(id);