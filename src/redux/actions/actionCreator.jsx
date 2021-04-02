import { GET, SHOW_MODAL, HIDE_MODAL } from '../types';
import { fetchPost } from '../../API/getPosts';
import { deletePost } from '../../API/deletePost';
import { createPost } from '../../API/createPost';


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

export function addPost(newPost) {
  return async dispatch => {
    await createPost(newPost);
    const response = await fetchPost();
  
    dispatch({
      type: GET,
      payload: response,
    })
  }
};

export function showModal() {
  return {
    type: SHOW_MODAL
  }
};

export function hideModal() {
  return {
    type: HIDE_MODAL
  }
};
