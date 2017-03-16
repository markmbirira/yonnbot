import { Channels } from '../actions/actionTypes';

const initialState = [
    {
      "title": "No posts yet",
      "url": "No posts yet",
      "created": "No posts yet",
      upvotes: "No posts yet",
      downvotes: "No posts yet",
      comments: "No posts yet"
    }
  ]

const channels = (state = initialState, action) => {
  switch (action.type) {
    case Channels.FETCH_ALL_CHANNELS_LIST:
      console.log('fetch_all_channels_list() loading');
      return state;
    case Channels.RECEIVE_ALL_CHANNELS_LIST:
      if (action.success) {
        console.log('success fetching list for all channels:',action.channels);
        return action.channels;
      } else {
        console.log('error fetching list for all channels',action.error);
        return state;
      }
    default:
      return state;
  }
}

export default channels;