import { GET } from '../types';
import { fetchPost } from '../../API/getPosts';
import { deletePost } from '../../API/deletePost';


export function fetchPosts() {
  return async dispatch => {
    const response = await fetchPost();

    dispatch({
      type: GET,
      payload: response,
    })
  }
};

export function deletePosts(id) {
  return async dispatch => {
    await deletePost(id);
    const response = await fetchPost();
  
    dispatch({
      type: GET,
      payload: response,
    })
  }
};