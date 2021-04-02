import { SHOW_MODAL, HIDE_MODAL } from '../types';
const initialState = {
  hidden: false
}

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_MODAL: 
      return {
        hidden: true
      }

    case HIDE_MODAL:
      return {
        hidden: false
      }

    default:
      return state;
  }
}