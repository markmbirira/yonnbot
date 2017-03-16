import { Channels } from './actionTypes'; // post action types/constants

import API from '../api/index';

let channelActionCreators = {
  // Thunk action creators/async dispatches
  fetchAllChannelsList() {
    return (dispatch) => {
      dispatch({ type: Channels.FETCH_ALL_CHANNELS_LIST });
      API.fetchAllChannelsList.then(
        (channels) => dispatch({ type: Channels.RECEIVE_ALL_CHANNELS_LIST, success: true, channels }),
        (error) => dispatch({ type: Channels.RECEIVE_ALL_CHANNELS_LIST, success: false, error })
      );
    };
  },

  // Regular Action Creator
  methodName(params) {
    return {
      type: "ACTION_TYPE",
      payload: "action payload"
    }
  },
};

export default channelActionCreators;