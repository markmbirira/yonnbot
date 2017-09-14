import update from 'react-addons-update';

import { Posts } from '../actions/actionTypes';

const initialState = {
  display: "list"
};

const toggleDisplay = (state = initialState, action) => {
  switch (action.type) {

    case Posts.SET_DISPLAY_LIST:
      return { display: action.displayState }

    case Posts.SET_DISPLAY_GRID:
      return { display: action.displayState }

    default:
      return state;
  }
}

export default toggleDisplay;