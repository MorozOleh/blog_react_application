import axios from "axios";
const BASE_URL = 'https://bloggy-api.herokuapp.com/comments';


const request = async(newComment) => {
  return axios.post(BASE_URL, { ...newComment });
}

export const createComment = (newComment) => request(newComment);