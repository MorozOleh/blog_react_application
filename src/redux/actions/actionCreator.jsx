import { GET } from '../types';
import { fetchPost} from '../../API/api';


export function fetchPosts(url) {
  return async dispatch => {
    const response = await fetchPost(url);

    dispatch({
      type: GET,
      payload: response,
    })
  }
}