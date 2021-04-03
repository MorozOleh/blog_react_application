
import {
  GET,
  GET_COMMENTS,
  GET_POST,
  SHOW_MODAL,
  HIDE_MODAL,
  GET_POST_COMMENTS
} from '../types';
import { fetchPost } from '../../API/getPosts';
import { deletePost } from '../../API/deletePost';
import { deleteComment } from '../../API/deleteComment';
import { createPost } from '../../API/createPost';
import { createComment } from '../../API/createComment';
import { fetchComments as getComments } from '../../API/getComments';


export function fetchPosts() {
  return async dispatch => {
    const response = await fetchPost();

    dispatch({
      type: GET,
      payload: response,
    })
  }
};

export function getPost(id) {
  return {
    type: GET_POST,
    payload: id
  }
}

export function fetchComments() {
  return async dispatch => {
    const response = await getComments();

    dispatch({
      type: GET_COMMENTS,
      payload: response,
    })
  }
};

export function getPostComments(id) {
  return async dispatch => {
    const response = await getComments();

    dispatch({
      type: GET_COMMENTS,
      payload: response,
    });

    dispatch({
      type: GET_POST_COMMENTS,
      payload: id
    })
  }  
}

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

export function deleteComments({id, postId}) {
  return async dispatch => {
    await deleteComment(id);
    const responseAllComments = await getComments();
    
    dispatch({
      type: GET_COMMENTS,
      payload: responseAllComments,
    })
        
    dispatch({
      type: GET_POST_COMMENTS,
      payload: postId,
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

export function addComment(newComment) {
  return async dispatch => {
    await createComment(newComment);

    const response = await getComments();
    dispatch({
      type: GET_COMMENTS,
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
