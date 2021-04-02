import { combineReducers } from 'redux';
import { postReducer } from './postsReducer';
import { modalReducer} from './modalReducer'

export const blogApp = combineReducers({
  postReducer,
  modalReducer,
});