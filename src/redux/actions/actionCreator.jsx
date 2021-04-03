
import {
  GET,
  GET_COMMENTS,
  GET_POST,
  GET_POST_COMMENTS
} from '../types';
import { getPosts } from '../../API/getPosts';
import { getComments } from '../../API/getComments';
import { deletePost } from '../../API/deletePost';
import { deleteComment } from '../../API/deleteComment';
import { createPost } from '../../API/createPost';
import { createComment } from '../../API/createComment';
import { putPost } from '../../API/putPost';


export function updatePost(id, newPost) {
  return async dispatch => {
    await putPost(id, newPost);

    const response = await getPosts();
    
    dispatch({
      type: GET,
      payload: response,
    })
  }
};

export function fetchPosts() {
  return async dispatch => {
    const response = await getPosts();

    dispatch({
      type: GET,
      payload: response,
    })
  }
};

export function fetchPostById(id) {
  return async dispatch => {
    dispatch({
      type: GET_POST,
      payload: id
    });

    const response = await getComments();

    dispatch({
      type: GET_COMMENTS,
      payload: response
    })

    dispatch({
      type: GET_POST_COMMENTS,
      payload: id
    })
  }
};

export function deletePosts(id) {
  return async dispatch => {
    await deletePost(id);
    const response = await getPosts();
  
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
    const response = await getPosts();
  
    dispatch({
      type: GET,
      payload: response,
    })
  }
};

export function addComment(newComment) {
  return async dispatch => {
    const { postId } = newComment;
    await createComment(newComment);

     const response = await getComments();

    dispatch({
      type: GET_COMMENTS,
      payload: response
    })

    dispatch({
      type: GET_POST_COMMENTS,
      payload: postId
    })
  }
};
